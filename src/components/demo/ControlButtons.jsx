import { SimpleTooltip } from "../../components/ui/Tooltip";

// Control buttons for the detected text area
export function ControlButtons({
  isCameraActive,
  onToggleCamera,
  onOpenSettings,
  onSpeak,
  onReset,
  onUndo,
  detectedTextArrayLength,
  isSpeaking,
  isRowLayout,
  onToggleLayout,
}) {
  return (
    <div className="flex items-center gap-2">
      {/* Camera toggle */}
      <SimpleTooltip
        content={isCameraActive ? "Turn off camera (S)" : "Turn on camera (S)"}
        position="bottom"
      >
        <button
          onClick={onToggleCamera}
          className={`p-2 rounded-lg border transition-colors ${
            isCameraActive
              ? "bg-brand-primary/20 border-brand-primary/50 text-brand-primary"
              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {isCameraActive ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
          )}
        </button>
      </SimpleTooltip>

      {/* Settings */}
      <SimpleTooltip content="Settings" position="bottom">
        <button
          onClick={onOpenSettings}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </SimpleTooltip>

      {/* Speaker/Audio */}
      <SimpleTooltip
        content={isSpeaking ? "Stop speaking" : "Read aloud"}
        position="bottom"
      >
        <button
          onClick={onSpeak}
          className={`p-2 rounded-lg border transition-colors ${
            isSpeaking
              ? "bg-green-500/20 border-green-500/50 text-green-400"
              : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {isSpeaking ? (
            <svg
              className="w-5 h-5 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
      </SimpleTooltip>

      {/* Undo */}
      <SimpleTooltip content="Undo last text" position="bottom">
        <button
          onClick={onUndo}
          disabled={detectedTextArrayLength === 0}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
      </SimpleTooltip>

      {/* Refresh/Reset */}
      <SimpleTooltip content="Clear text" position="bottom">
        <button
          onClick={onReset}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </SimpleTooltip>
      {/* Report Issue */}
      <SimpleTooltip content="Report Issue" position="bottom">
        <a
          href="https://github.com/Phal-Sovandy/Khmer-Sign-Language-Translation-System/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </a>
      </SimpleTooltip>

      {/* Layout Toggle Button */}
      <SimpleTooltip
        content={
          isRowLayout
            ? "Switch to vertical layout"
            : "Switch to horizontal layout"
        }
        position="bottom"
      >
        <button
          onClick={onToggleLayout}
          className={`relative h-9 w-20 rounded-lg border overflow-hidden transition-all duration-200 ${
            isRowLayout
              ? "bg-brand-primary/20 border-brand-primary/50"
              : "bg-white/5 border-white/10 hover:bg-white/10"
          }`}
        >
          {/* Active state background (inset effect) */}
          <div
            className={`absolute top-0 bottom-0 w-1/2 transition-all duration-200 ease-in-out rounded-sm ${
              isRowLayout
                ? "left-1/2 rounded-r-lg bg-brand-primary/30"
                : "left-0 rounded-l-lg bg-brand-primary/30"
            }`}
            style={{
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          />

          {/* Icons container */}
          <div className="relative h-full flex items-center justify-around px-1.5">
            {/* Vertical stack icon (Column layout) - Left side */}
            <div className="flex items-center justify-center w-8 h-8 transition-colors duration-200">
              <svg
                className={`w-4 h-4 transition-colors duration-200 ${
                  !isRowLayout ? "text-brand-primary" : "text-white/60"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 11H2v2h20zm-4-4H6V4h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-2 11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
              </svg>
            </div>

            {/* Horizontal stack icon (Row layout) - Right side */}
            <div className="flex items-center justify-center w-8 h-8 transition-colors duration-200">
              <svg
                className={`w-4 h-4 transition-colors duration-200 ${
                  isRowLayout ? "text-brand-primary" : "text-white/60"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ transform: "rotate(90deg)" }}
              >
                <path d="M22 11H2v2h20zm-4-4H6V4h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-2 11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
              </svg>
            </div>
          </div>
        </button>
      </SimpleTooltip>
    </div>
  );
}
