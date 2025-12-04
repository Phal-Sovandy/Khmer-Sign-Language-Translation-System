import { useState, useRef, useEffect, useCallback } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SimpleTooltip } from "../components/ui/Tooltip";
import { SettingsModal,VideoFeed, ControlButtons, DetectedTextArea} from "./function.jsx";

export default function DemoPage() {
  const videoRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [detectedText, setDetectedText] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
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
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  const toggleCamera = useCallback(() => {
    isCameraActive ? stopCamera() : startCamera();
  }, [isCameraActive, startCamera, stopCamera]);

  const speakText = useCallback(() => {
    if (!detectedText) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) { setIsSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(detectedText);
    utterance.lang = "km-KH";
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [detectedText, isSpeaking]);

  const resetText = useCallback(() => {
    setDetectedText("");
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
      window.speechSynthesis.cancel();
    };
  }, [stopCamera]);

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

          fetch("http://127.0.0.1:5000/predict_image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: dataURL }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.label) {
                setDetectedText(`${data.label} (${data.confidence.toFixed(1)}%)`);
              } else if (data.error) {
                setDetectedText("No hand detected");
              }
            })
            .catch(err => console.error("Prediction error:", err));
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCameraActive]);

  return (
    <div className="min-h-screen bg-brand-background overflow-x-clip">
      <Header showDemoButton={false} />
      <main className="px-8 pt-28 pb-16 max-w-[1200px] mx-auto">
        <VideoFeed videoRef={videoRef} isCameraActive={isCameraActive} error={cameraError} onRetry={startCamera} />
        <DetectedTextArea
          text={detectedText}
          isCameraActive={isCameraActive}
          onToggleCamera={toggleCamera}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onSpeak={speakText}
          onReset={resetText}
          isSpeaking={isSpeaking}
        />
      </main>
      <Footer />
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}
