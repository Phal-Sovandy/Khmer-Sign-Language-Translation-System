import React, { useState } from "react";

/**
 * CodeBlock Component with Copy Button
 */
export const CodeBlock = ({ code, language = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative group">
      <div className="p-4 bg-gray-900/50 border border-white/10 rounded-xl overflow-x-auto">
        <pre className="text-sm text-white/80 font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800/80 hover:bg-gray-700/90 border border-white/20 rounded-lg transition-all opacity-70 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 hover:scale-105"
        title="Copy code"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <svg
            className="w-4 h-4 text-green-400"
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
        ) : (
          <svg
            className="w-4 h-4 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
