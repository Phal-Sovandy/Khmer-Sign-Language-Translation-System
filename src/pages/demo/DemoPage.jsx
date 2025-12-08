import { useState, useRef, useEffect, useCallback } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
  VideoFeedSection,
  DetectedTextSection,
  SettingsModalSection,
} from "../../components/demo";

export default function DemoPage() {
  const videoRef = useRef(null);
  // Initialize ref with data from localStorage
  const initializeDetectedTextArray = () => {
    try {
      const stored = localStorage.getItem("sign-language-demo-detected-text");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.error(
        "Error loading detected text ref from localStorage:",
        error
      );
    }
    return [];
  };
  const initialDetectedTextArray = initializeDetectedTextArray();
  const detectedTextArrayRef = useRef(initialDetectedTextArray);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [detectedTextArray, setDetectedTextArray] = useState(
    initialDetectedTextArray
  );
  const [pendingText, setPendingText] = useState(null); // Text waiting to be accepted
  const [errorMessage, setErrorMessage] = useState(null); // Error messages like "No hand detected"
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRowLayout, setIsRowLayout] = useState(false);
  const [confidenceLevel, setConfidenceLevel] = useState(() => {
    // Load confidence level from localStorage
    try {
      const stored = localStorage.getItem("sign-language-demo-settings");
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.sensitivity || 70;
      }
    } catch (error) {
      console.error("Error loading confidence level from localStorage:", error);
    }
    return 70;
  });

  // Save confidence level to localStorage when it changes
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sign-language-demo-settings");
      const currentSettings = stored ? JSON.parse(stored) : {};
      localStorage.setItem(
        "sign-language-demo-settings",
        JSON.stringify({ ...currentSettings, sensitivity: confidenceLevel })
      );
    } catch (error) {
      console.error("Error saving confidence level to localStorage:", error);
    }
  }, [confidenceLevel]);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
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
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  const toggleCamera = useCallback(() => {
    isCameraActive ? stopCamera() : startCamera();
  }, [isCameraActive, startCamera, stopCamera]);

  const speakText = useCallback(() => {
    // Extract labels only (without confidence) for speech
    const textToSpeak = detectedTextArray
      .map((item) => item.split(" (")[0])
      .join(" ");
    if (!textToSpeak) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "km-KH";
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [detectedTextArray, isSpeaking]);

  const undoLastText = useCallback(() => {
    setDetectedTextArray((prev) => {
      if (prev.length > 0) {
        const updated = prev.slice(0, -1);
        detectedTextArrayRef.current = updated;
        return updated;
      }
      return prev;
    });
  }, []);

  const resetText = useCallback(() => {
    setDetectedTextArray([]);
    detectedTextArrayRef.current = [];
    // Clear from localStorage
    try {
      localStorage.removeItem("sign-language-demo-detected-text");
    } catch (error) {
      console.error("Error clearing detected text from localStorage:", error);
    }
    setPendingText(null);
    setErrorMessage(null);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const acceptPendingText = useCallback(() => {
    if (pendingText) {
      // Keep the full text with confidence when accepting
      setDetectedTextArray((prev) => {
        const label = pendingText.split(" (")[0];
        const lastLabel =
          prev.length > 0 ? prev[prev.length - 1].split(" (")[0] : null;
        if (prev.length === 0 || lastLabel !== label) {
          return [...prev, pendingText]; // Store with confidence
        }
        return prev;
      });
      setPendingText(null);
      setErrorMessage(null); // Clear error message when accepting pending text
    }
  }, [pendingText]);

  // Keep ref in sync with state and save to localStorage
  useEffect(() => {
    detectedTextArrayRef.current = detectedTextArray;
    // Save to localStorage
    try {
      localStorage.setItem(
        "sign-language-demo-detected-text",
        JSON.stringify(detectedTextArray)
      );
    } catch (error) {
      console.error("Error saving detected text to localStorage:", error);
    }
  }, [detectedTextArray]);

  useEffect(() => {
    return () => {
      stopCamera();
      window.speechSynthesis.cancel();
    };
  }, [stopCamera]);

  // Keyboard shortcut: 's' to toggle camera
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only trigger if not typing in an input/textarea
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

  // 🔗 Auto-capture loop
  useEffect(() => {
    let intervalId;
    if (isCameraActive) {
      intervalId = setInterval(() => {
        if (videoRef.current) {
          const canvas = document.createElement("canvas");
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL("image/jpeg");

          fetch("http://127.0.0.1:3000/predict_image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: dataURL }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.label) {
                const confidence = data.confidence || 0;
                const label = data.label;
                const newText = `${label} (${confidence.toFixed(1)}%)`;

                // Only append to array if confidence is greater than or equal to the set confidence level
                if (confidence >= confidenceLevel) {
                  setPendingText(null); // Clear pending text as it's now accepted
                  setErrorMessage(null); // Clear error message when new detection is accepted
                  // Append to array only if confidence meets threshold (avoid duplicates if same text)
                  setDetectedTextArray((prev) => {
                    // Check if this is a new detection (not the same as last one)
                    // Compare labels only (without confidence) to avoid duplicates
                    const lastLabel =
                      prev.length > 0
                        ? prev[prev.length - 1].split(" (")[0]
                        : null;
                    if (prev.length === 0 || lastLabel !== label) {
                      return [...prev, newText]; // Store with confidence for display
                    }
                    return prev;
                  });
                } else {
                  // Confidence too low - show as pending only if not already accepted
                  // Check if this label is already in the accepted array
                  const isAlreadyAccepted = detectedTextArrayRef.current.some(
                    (item) => item.split(" (")[0] === label
                  );
                  if (isAlreadyAccepted) {
                    setPendingText(null); // Don't show as pending if already accepted
                  } else {
                    setPendingText(newText); // Show as pending if not yet accepted
                  }
                  setErrorMessage(null); // Clear error message when new detection appears (even if pending)
                }
              } else {
                // No label detected - show error and clear pending text
                setErrorMessage("No hand detected");
                setPendingText(null);
              }
            })
            .catch((err) => {
              console.error("Prediction error:", err);
              setErrorMessage("No hand detected");
              setPendingText(null);
            });
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCameraActive, confidenceLevel]);

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
            <div className={`w-full`}>
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
    </div>
  );
}
