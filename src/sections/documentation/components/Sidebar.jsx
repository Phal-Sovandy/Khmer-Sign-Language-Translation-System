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
 * Desktop Sidebar Navigation Component
 */
export const Sidebar = React.memo(({ activeSection, onSectionClick }) => {
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    // Update active section immediately for better UX
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <nav className="sticky top-28 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors rounded-lg ${
              activeSection === section.id
                ? "text-white font-medium bg-white/5"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
