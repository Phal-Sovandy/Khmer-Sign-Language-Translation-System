import React from "react";
import Header from "../../../components/layout/Header";
import reportPdf from "../../../assets/Khmer Sign Language Translation System - Report.pdf";

/**
 * Download Docs Button Component
 */
const DownloadDocsButton = React.memo(({ isMobile = false }) => {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    // Use the imported PDF URL from Vite
    link.href = reportPdf;
    link.download = "Khmer Sign Language Translation System - Report.pdf";
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    // Clean up after a short delay to ensure download starts
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <button
      onClick={handleDownload}
      className={`${
        isMobile ? "w-full justify-center" : "ml-auto"
      } inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/5`}
    >
      Download Docs
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </button>
  );
});

DownloadDocsButton.displayName = "DownloadDocsButton";

/**
 * Documentation Page Header Component
 */
export const DocHeader = React.memo(() => {
  return (
    <Header showDemoButton={false} customButton={<DownloadDocsButton />} />
  );
});

DocHeader.displayName = "DocHeader";
