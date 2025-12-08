import { useState, useEffect } from "react";

// Buffer size options
const BUFFER_SIZE_OPTIONS = [3, 5, 10, 15, 20];

// LocalStorage key
const SETTINGS_STORAGE_KEY = "sign-language-demo-settings";

// Default settings values
const DEFAULT_SETTINGS = {
  sensitivity: 80,
  autoSpeak: false,
  camera: "user",
  voiceGender: "male",
  bufferSize: 5,
};

// Load settings from localStorage
const loadSettings = () => {
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_SETTINGS, ...parsed };
    }
  } catch (error) {
    console.error("Error loading settings from localStorage:", error);
  }
  return DEFAULT_SETTINGS;
};

// Save settings to localStorage
const saveSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error("Error saving settings to localStorage:", error);
  }
};

export function SettingsModalSection({
  isOpen,
  onClose,
  confidenceLevel,
  onConfidenceLevelChange,
}) {
  // Load settings from localStorage on mount
  const [sensitivity, setSensitivity] = useState(() => {
    const settings = loadSettings();
    return confidenceLevel || settings.sensitivity;
  });
  const [autoSpeak, setAutoSpeak] = useState(() => {
    const settings = loadSettings();
    return settings.autoSpeak;
  });
  const [mirrorVideo, setMirrorVideo] = useState(() => {
    const settings = loadSettings();
    return settings.mirrorVideo;
  });
  const [camera, setCamera] = useState(() => {
    const settings = loadSettings();
    return settings.camera;
  });
  const [voiceGender, setVoiceGender] = useState(() => {
    const settings = loadSettings();
    return settings.voiceGender;
  });
  const [bufferSize, setBufferSize] = useState(() => {
    const settings = loadSettings();
    return settings.bufferSize;
  });

  // Sync sensitivity with confidenceLevel prop
  useEffect(() => {
    if (confidenceLevel !== undefined) {
      setSensitivity(confidenceLevel);
    }
  }, [confidenceLevel]);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    saveSettings({
      sensitivity,
      autoSpeak,
      mirrorVideo,
      camera,
      voiceGender,
      bufferSize,
    });
  }, [sensitivity, autoSpeak, mirrorVideo, camera, voiceGender, bufferSize]);

  // Add custom slider styles
  useEffect(() => {
    const styleId = "custom-slider-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .stroke-width-slider {
        background: linear-gradient(
          to right,
          #3b82f6 0%,
          #3b82f6 var(--slider-value, 70%),
          rgba(255, 255, 255, 0.1) var(--slider-value, 70%),
          rgba(255, 255, 255, 0.1) 100%
        );
      }
      .stroke-width-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2rem;
        height: 1.25rem;
        border-radius: 0.625rem;
        background: #ffffff;
        border: none;
        cursor: grab;
        box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.3),
          0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
        position: relative;
      }
      .stroke-width-slider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.4),
          0 0.125rem 0.25rem rgba(0, 0, 0, 0.3),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.08);
      }
      .stroke-width-slider::-webkit-slider-thumb:active {
        cursor: grabbing;
        transform: scale(1.05);
        box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.3),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.1);
      }
      .stroke-width-slider::-webkit-slider-thumb::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.1875rem;
        border-radius: 0.09375rem;
        background: #3b82f6;
        box-shadow: inset 0 0.0625rem 0 rgba(255, 255, 255, 0.1),
          inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.1);
      }
      .stroke-width-slider::-moz-range-thumb {
        width: 1.875rem;
        height: 0.9375rem;
        border-radius: 0.625rem;
        background: #ffffff;
        border: none;
        cursor: grab;
        box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.3),
          0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
      }
      .stroke-width-slider::-moz-range-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.4),
          0 0.125rem 0.25rem rgba(0, 0, 0, 0.3),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.08);
      }
      .stroke-width-slider::-moz-range-thumb:active {
        cursor: grabbing;
        transform: scale(1.05);
        box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.3),
          0 0 0 0.0625rem rgba(0, 0, 0, 0.1);
      }
      .stroke-width-slider::-moz-range-track {
        width: 100%;
        height: 0.25rem;
        border-radius: 0.125rem;
        background: #3b82f6;
        border: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const resetToDefault = () => {
    // Reset to actual default settings
    setSensitivity(DEFAULT_SETTINGS.sensitivity);
    setAutoSpeak(DEFAULT_SETTINGS.autoSpeak);
    setCamera(DEFAULT_SETTINGS.camera);
    setVoiceGender(DEFAULT_SETTINGS.voiceGender);
    setBufferSize(DEFAULT_SETTINGS.bufferSize);
    // Update parent confidence level
    if (onConfidenceLevelChange) {
      onConfidenceLevelChange(DEFAULT_SETTINGS.sensitivity);
    }
    // Clear localStorage to reset to defaults
    try {
      localStorage.removeItem(SETTINGS_STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing settings from localStorage:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-white mb-2">
          Settings
        </h3>

        {/* Subtitle */}
        <p className="text-white/60 font-sans text-sm mb-6">
          Configure your demo experience.
        </p>

        <div className="space-y-5">
          {/* Camera Selection */}
          <div>
            <label className="block text-white/80 text-sm font-sans font-medium mb-2">
              Camera
            </label>
            <select
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 backdrop-blur border border-white/20 rounded-lg text-white text-sm font-sans focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
            >
              <option value="user" className="bg-[#1a1a1a]">
                Front Camera
              </option>
              <option value="environment" className="bg-[#1a1a1a]">
                Back Camera
              </option>
            </select>
          </div>

          {/* Confidence Level */}
          <div>
            <label className="block text-white/80 text-sm font-sans font-medium -mb-1">
              Confidence Level
            </label>
            <div className="flex items-center gap-3 min-w-[12.5rem] relative">
              <div className="flex-1 relative h-1">
                {/* Marker dots at 70 and 90 - positioned on the track, under the thumb */}
                <div
                  className="absolute top-1/2 translate-y-[11px] w-1.5 h-1.5 bg-green-500 rounded-full z-10 pointer-events-none"
                  style={{ left: "calc(70% - 3px)" }}
                />
                <div
                  className="absolute top-1/2 translate-y-[11px] w-1.5 h-1.5 bg-green-500 rounded-full z-10 pointer-events-none"
                  style={{ left: "calc(90% - 3px)" }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sensitivity}
                  onChange={(e) => {
                    const newValue = Number(e.target.value);
                    setSensitivity(newValue);
                    // Update parent immediately
                    if (onConfidenceLevelChange) {
                      onConfidenceLevelChange(newValue);
                    }
                    // Update CSS variable for gradient
                    document.documentElement.style.setProperty(
                      "--slider-value",
                      `${newValue}%`
                    );
                  }}
                  className="w-full h-1 rounded-sm outline-none appearance-none cursor-pointer stroke-width-slider relative z-20"
                  style={{
                    WebkitAppearance: "none",
                    appearance: "none",
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${sensitivity}%, rgba(255, 255, 255, 0.1) ${sensitivity}%, rgba(255, 255, 255, 0.1) 100%)`,
                  }}
                />
              </div>
              <span
                className={`text-sm font-sans font-semibold whitespace-nowrap ${
                  sensitivity >= 70 && sensitivity <= 90
                    ? "text-brand-primary"
                    : "text-yellow-400"
                }`}
              >
                {sensitivity}%
              </span>
            </div>
            <div className="flex justify-between text-white/40 text-xs font-sans mt-2">
              <span>Low</span>
              <span>High</span>
            </div>
            {/* Warning message */}
            {(sensitivity < 70 || sensitivity > 90) && (
              <div className="mt-2 p-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <p className="text-yellow-400 text-xs font-sans leading-relaxed">
                  {sensitivity < 70
                    ? "Confidence level is too low. Recommended range: 70-90% for optimal detection accuracy."
                    : "Confidence level is too high. Recommended range: 70-90% to avoid false positives."}
                </p>
              </div>
            )}
          </div>

          {/* Auto-speak toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="text-white/80 text-sm font-sans font-medium">
              Auto-speak detected text
            </label>
            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              className={`w-14 h-6 rounded-full relative transition-colors ${
                autoSpeak
                  ? "bg-brand-primary"
                  : "bg-white/10 border border-white/20"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-7 h-4 bg-white rounded-full transition-all duration-200 shadow-md ${
                  autoSpeak ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Voice Gender Selection */}
          <div>
            <label className="block text-white/80 text-sm font-sans font-medium mb-2">
              Voice
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setVoiceGender("male")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                  voiceGender === "male"
                    ? "bg-brand-primary/20 border-brand-primary text-white"
                    : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-sm font-sans font-medium">Male</span>
              </button>
              <button
                onClick={() => setVoiceGender("female")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                  voiceGender === "female"
                    ? "bg-brand-primary/20 border-brand-primary text-white"
                    : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-sm font-sans font-medium">Female</span>
              </button>
            </div>
          </div>

          {/* Text Buffer Size */}
          <div>
            <label className="block text-white/80 text-sm font-sans font-medium mb-2">
              Text Buffer Size
            </label>
            <div className="flex gap-2">
              {BUFFER_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => setBufferSize(size)}
                  className={`flex-1 px-3 py-2.5 rounded-xl border text-sm font-sans font-medium transition-colors ${
                    bufferSize === size
                      ? "bg-brand-primary/20 border-brand-primary text-white"
                      : "bg-white/5 border-white/20 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-white/40 text-xs font-sans mt-1.5">
              Number of words to buffer before processing
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={resetToDefault}
            className="flex-1 px-5 py-3 bg-white/5 border border-white/20 text-white font-sans text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Reset to Default
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-5 py-3 bg-white text-black font-sans text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
