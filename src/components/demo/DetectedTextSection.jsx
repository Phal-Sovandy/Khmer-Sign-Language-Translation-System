import { useState } from "react";
import { ControlButtons } from "./ControlButtons";

// Detected text output area
export function DetectedTextSection({
  detectedTextArray,
  pendingText,
  errorMessage,
  confidenceLevel,
  onAcceptPending,
  isCameraActive,
  onToggleCamera,
  onOpenSettings,
  onSpeak,
  onReset,
  onUndo,
  isSpeaking,
  isRowLayout,
  onToggleLayout,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Extract labels only (without confidence) for copying
    const textToCopy = detectedTextArray
      .map((item) => item.split(" (")[0])
      .join(" ");
    if (!textToCopy) return;
    // Only copy accepted text, not pending text
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Get the latest accepted text for the green indicator
  const latestAcceptedText =
    detectedTextArray.length > 0
      ? detectedTextArray[detectedTextArray.length - 1]
      : null;

  return (
    <div className={isRowLayout ? "" : "mt-6"}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold font-sans">Detected Text</h3>
        <ControlButtons
          isCameraActive={isCameraActive}
          onToggleCamera={onToggleCamera}
          onOpenSettings={onOpenSettings}
          onSpeak={onSpeak}
          onReset={onReset}
          onUndo={onUndo}
          detectedTextArrayLength={detectedTextArray.length}
          isSpeaking={isSpeaking}
          isRowLayout={isRowLayout}
          onToggleLayout={onToggleLayout}
        />
      </div>

      {/* Status indicator - outside text box (Error > Warning > Accept) - only show when camera is active */}
      {isCameraActive &&
        (errorMessage ? (
          // Error indicator (highest priority)
          <div className="mb-2 px-2 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2">
            <svg
              className="w-4 h-4 text-red-400 shrink-0"
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
            <p className="text-red-400 text-xs font-sans">{errorMessage}</p>
          </div>
        ) : pendingText ? (
          // Warning/Pending indicator (medium priority)
          <div className="mb-2 px-2 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1">
              <svg
                className="w-4 h-4 text-yellow-400 shrink-0"
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
              <p className="text-yellow-400 text-xs font-sans">
                Pending: <span className="font-khmer">{pendingText}</span> (Min:{" "}
                {confidenceLevel}%)
              </p>
            </div>
            <button
              onClick={onAcceptPending}
              className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-sans font-medium rounded-lg hover:bg-green-500/30 transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Accept
            </button>
          </div>
        ) : latestAcceptedText ? (
          // Accept indicator (lowest priority - only when no error or pending)
          <div className="mb-2 px-2 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm font-khmer font-medium">
              {latestAcceptedText}
            </p>
          </div>
        ) : null)}

      {/* Text Area */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl p-4 min-h-[180px] max-h-[500px] resize-y overflow-auto">
        {/* Copy button */}
        <button
          onClick={handleCopy}
          disabled={detectedTextArray.length === 0}
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
              Copy
            </>
          )}
        </button>

        {/* Detected text */}
        {detectedTextArray.length > 0 ? (
          <div className="pr-20">
            <p className="text-white/80 font-khmer text-sm leading-relaxed">
              {detectedTextArray
                .map((item) => item.split(" (")[0]) // Extract labels only for display
                .join("-")}
            </p>
          </div>
        ) : !errorMessage && !pendingText && !latestAcceptedText ? (
          <p className="text-white/30 font-sans text-sm italic">
            {isCameraActive
              ? "Waiting for sign language detection..."
              : "Turn on the camera to start detecting sign language."}
          </p>
        ) : null}
      </div>
    </div>
  );
}
