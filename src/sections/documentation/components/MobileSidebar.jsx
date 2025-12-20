import React from "react";
import { sections } from "../config/sections";
import { scrollToElement } from "../../../utils/scroll";

/**
 * Scroll to section helper
 */
function scrollToSection(sectionId) {
  scrollToElement(sectionId, 120);
}

/**
 * Mobile Sidebar Navigation Component
 */
export const MobileSidebar = React.memo(
  ({ activeSection, isOpen, onClose, onSectionClick }) => {
    if (!isOpen) return null;

    const handleClick = (sectionId) => {
      scrollToSection(sectionId);
      // Update active section immediately for better UX
      if (onSectionClick) {
        onSectionClick(sectionId);
      }
      onClose();
    };

    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />
        <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-background border-r border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-white font-semibold">Documentation</span>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white"
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
          </div>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors rounded-lg ${
                  activeSection === section.id
                    ? "text-white font-medium bg-white/5"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    );
  }
);

MobileSidebar.displayName = "MobileSidebar";
