import { useState, useRef, useEffect, useCallback } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  VideoFeedSection,
  DetectedTextSection,
  SettingsModalSection,
  SampleGestureModal,
} from "../../components/demo";

export default function DemoPage() {
  const videoRef = useRef(null);
  const handsRef = useRef(null);
  const cameraRef = useRef(null);

  const detectedTextArrayRef = useRef([]);
  const [detectedTextArray, setDetectedTextArray] = useState(() => {
    try {
      const stored = localStorage.getItem("sign-language-demo-detected-text");
      if (stored) return JSON.parse(stored) || [];
    } catch {}
    return [];
  });

  const [pendingText, setPendingText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [isSampleGesturesOpen, setIsSampleGesturesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRowLayout, setIsRowLayout] = useState(false);
  const [confidenceLevel, setConfidenceLevel] = useState(() => {
    try {
      const stored = localStorage.getItem("sign-language-demo-settings");
      if (stored) return JSON.parse(stored)?.sensitivity || 70;
    } catch {}
    return 70;
  });

  // Sync detected text to localStorage
  useEffect(() => {
    detectedTextArrayRef.current = detectedTextArray;
    try {
      localStorage.setItem(
        "sign-language-demo-detected-text",
        JSON.stringify(detectedTextArray),
      );
    } catch {}
  }, [detectedTextArray]);

  // Sync confidence to localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sign-language-demo-settings");
      const current = stored ? JSON.parse(stored) : {};
      localStorage.setItem(
        "sign-language-demo-settings",
        JSON.stringify({ ...current, sensitivity: confidenceLevel }),
      );
    } catch {}
  }, [confidenceLevel]);

  // Camera controls
  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720, facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
        setCameraError(null);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setCameraError(err.message);
      setIsCameraActive(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  const toggleCamera = useCallback(() => {
    isCameraActive ? stopCamera() : startCamera();
  }, [isCameraActive, startCamera, stopCamera]);

  // Text-to-Speech
  const speakText = useCallback(async () => {
    const textToSpeak = detectedTextArray
      .map((item) => item.split(" (")[0])
      .join(" ");
    if (!textToSpeak) return;

    if (isSpeaking && window.currentAudio) {
      window.currentAudio.pause();
      setIsSpeaking(false);
      return;
    }

    const API_KEY = import.meta.env.VITE_GOOGLE_TTS_API_KEY || "";
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text: textToSpeak },
          voice: { languageCode: "km-KH", ssmlGender: "FEMALE" },
          audioConfig: { audioEncoding: "MP3" },
        }),
      });
      const data = await response.json();
      if (!data.audioContent) return;

      const audioBlob = new Blob(
        [Uint8Array.from(atob(data.audioContent), (c) => c.charCodeAt(0))],
        { type: "audio/mp3" },
      );
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      window.currentAudio = audio;

      audio.onplay = () => setIsSpeaking(true);
      audio.onended = () => {
        setIsSpeaking(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();
    } catch (err) {
      console.error(err);
      setIsSpeaking(false);
    }
  }, [detectedTextArray, isSpeaking]);

  // Undo/Reset text
  const undoLastText = useCallback(() => {
    setDetectedTextArray((prev) => {
      const updated = prev.slice(0, -1);
      detectedTextArrayRef.current = updated;
      return updated;
    });
  }, []);

  const resetText = useCallback(() => {
    setDetectedTextArray([]);
    detectedTextArrayRef.current = [];
    setPendingText(null);
    setErrorMessage(null);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    try {
      localStorage.removeItem("sign-language-demo-detected-text");
    } catch {}
  }, []);

  const acceptPendingText = useCallback(() => {
    if (!pendingText) return;
    setDetectedTextArray((prev) => {
      const lastLabel = prev.length
        ? prev[prev.length - 1].split(" (")[0]
        : null;
      const newLabel = pendingText.split(" (")[0];
      if (!prev.length || lastLabel !== newLabel) return [...prev, pendingText];
      return prev;
    });
    setPendingText(null);
    setErrorMessage(null);
  }, [pendingText]);

  const handlePredictionResponse = useCallback(
    (data) => {
      const confidence = data.confidence || 0;
      const label = data.label;
      const newText = `${label} (${confidence.toFixed(1)}%)`;

      if (confidence >= confidenceLevel) {
        setPendingText(null);
        setErrorMessage(null);
        setDetectedTextArray((prev) => {
          const lastLabel = prev.length
            ? prev[prev.length - 1].split(" (")[0]
            : null;
          if (!prev.length || lastLabel !== label) return [...prev, newText];
          return prev;
        });
      } else {
        const isAlreadyAccepted = detectedTextArrayRef.current.some(
          (item) => item.split(" (")[0] === label,
        );
        setPendingText(isAlreadyAccepted ? null : newText);
        setErrorMessage(null);
      }
    },
    [confidenceLevel],
  );

  // -----------------------------
  // MediaPipe Hands + Camera Integration
  // -----------------------------
  useEffect(() => {
    if (!isCameraActive || !videoRef.current) return;
    if (handsRef.current) return;

    let handLandmarker = null;
    let animationId = null;
    let running = true;

    const loadMediaPipe = async () => {
      const { HandLandmarker, FilesetResolver } =
        await import("@mediapipe/tasks-vision");

      const vision = await FilesetResolver.forVisionTasks(
        "/mediapipe/tasks-vision/wasm",
      );

      handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 2,
        minHandDetectionConfidence: 0.8,
        minHandPresenceConfidence: 0.8,
        minTrackingConfidence: 0.5,
      });

      handsRef.current = handLandmarker;

      const processFrame = () => {
        if (!running || !videoRef.current || !handLandmarker) return;

        const video = videoRef.current;

        // Guard: skip if video has no valid frame yet
        if (
          video.readyState < 2 ||
          video.videoWidth === 0 ||
          video.videoHeight === 0 ||
          video.paused ||
          video.ended
        ) {
          animationId = requestAnimationFrame(processFrame);
          return;
        }

        try {
          const nowMs = performance.now();
          const results = handLandmarker.detectForVideo(video, nowMs);
          const landmarks = results.landmarks || [];

          if (landmarks.length > 0) {
            fetch("http://127.0.0.1:3000/predict_landmarks", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ landmarks }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.label) handlePredictionResponse(data);
              })
              .catch(() => {});
          }
        } catch (err) {
          console.warn("Frame processing error:", err);
        }

        animationId = requestAnimationFrame(processFrame);
      };

      // Wait for video to be ready
      const video = videoRef.current;
      if (video.readyState >= 2) {
        processFrame();
      } else {
        video.addEventListener("loadeddata", processFrame, { once: true });
      }
    };

    loadMediaPipe().catch(console.error);

    return () => {
      running = false;
      if (animationId) cancelAnimationFrame(animationId);
      if (handsRef.current) {
        handsRef.current.close();
        handsRef.current = null;
      }
    };
  }, [isCameraActive, handlePredictionResponse]);

  // Keyboard shortcut: 's' to toggle camera
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        e.key === "s" &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA" &&
        !e.target.isContentEditable
      ) {
        e.preventDefault();
        toggleCamera();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [toggleCamera]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopCamera();
      window.speechSynthesis.cancel();
    };
  }, [stopCamera]);

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div className="min-h-screen bg-brand-background overflow-x-clip">
      <Header showDemoButton={false} />
      <main
        className={`${
          isRowLayout
            ? "px-0 pt-20 pb-8 max-w-[1700px]"
            : "px-8 pt-28 pb-16 max-w-[1300px]"
        } mx-auto`}
      >
        <div
          className={`flex gap-6 min-h-[100vh] ${
            isRowLayout ? "flex-row pb-50 items-center" : "flex-col"
          } transition-all duration-300`}
        >
          <div
            className={`${
              isRowLayout ? "flex-2 py-40 px-5" : "w-full p-5"
            } flex items-center justify-center bg-gray-900/30 rounded-xl`}
          >
            <div className="w-full">
              <VideoFeedSection
                videoRef={videoRef}
                isCameraActive={isCameraActive}
                error={cameraError}
                onRetry={startCamera}
              />
            </div>
          </div>
          <div className={isRowLayout ? "flex-1" : "w-full"}>
            <DetectedTextSection
              detectedTextArray={detectedTextArray}
              pendingText={pendingText}
              errorMessage={errorMessage}
              confidenceLevel={confidenceLevel}
              onAcceptPending={acceptPendingText}
              isCameraActive={isCameraActive}
              onToggleCamera={toggleCamera}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onOpenSampleGestures={() => setIsSampleGesturesOpen(true)}
              onSpeak={speakText}
              onReset={resetText}
              onUndo={undoLastText}
              isSpeaking={isSpeaking}
              isRowLayout={isRowLayout}
              onToggleLayout={() => setIsRowLayout(!isRowLayout)}
            />
          </div>
        </div>
      </main>
      <Footer />
      <SettingsModalSection
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        confidenceLevel={confidenceLevel}
        onConfidenceLevelChange={setConfidenceLevel}
      />
      <SampleGestureModal
        isOpen={isSampleGesturesOpen}
        onClose={() => setIsSampleGesturesOpen(false)}
      />
    </div>
  );
}
