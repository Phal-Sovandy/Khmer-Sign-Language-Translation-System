import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import { sections } from "../sections/documentation/config/sections";
import {
  Sidebar,
  MobileSidebar,
  DocHeader,
} from "../sections/documentation/components";
import {
  ProjectOverview,
  Objectives,
  SystemRequirements,
  HowItWorks,
  DatasetTraining,
  Demo,
  API,
  Limitations,
  FutureWork,
  Community,
} from "../sections/documentation";
import { SEO } from "../components/seo";

/**
 * Main Documentation Page Component
 */
export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("project-overview");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const offset = 250; // Offset for header + buffer

      const sectionElements = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;
          
          return {
            id: section.id,
            element,
            top: elementTop,
            bottom: elementBottom,
            rect,
          };
        })
        .filter(Boolean);

      if (sectionElements.length === 0) return;

      // If at the top of the page, activate first section
      if (scrollPosition < 50) {
        setActiveSection(sectionElements[0].id);
        return;
      }

      // Find the section that is currently most visible in the viewport
      let activeId = sectionElements[0].id;
      let maxVisible = 0;

      for (const section of sectionElements) {
        const { rect, top, bottom } = section;
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibleRatio = visibleHeight / rect.height;

        // Check if section is in the viewport with offset
        if (rect.top <= offset && rect.bottom >= 0) {
          // If this section is more visible than the current active one, make it active
          if (visibleRatio > maxVisible || (rect.top <= offset && top <= scrollPosition + offset)) {
            maxVisible = visibleRatio;
            activeId = section.id;
          }
        }
      }

      // Fallback: find the section we've scrolled past
      if (activeId === sectionElements[0].id) {
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const { id, top } = sectionElements[i];
          if (top <= scrollPosition + offset) {
            activeId = id;
            break;
          }
        }
      }

      // If scrolled to bottom, activate last section
      const lastSection = sectionElements[sectionElements.length - 1];
      if (
        scrollPosition + viewportHeight >=
        document.documentElement.scrollHeight - 50
      ) {
        activeId = lastSection.id;
      }

      setActiveSection(activeId);
    };

    // Initial check with a small delay to ensure elements are rendered
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 150);

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Also call immediately

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-background overflow-x-clip">
      <SEO
        title="Documentation"
        url="/documentation"
        keywords="sign language documentation, KSLTS documentation, system requirements, how it works, API documentation, technical documentation, dataset training, machine learning model, gesture recognition guide, installation guide"
      />
      <DocHeader />

      <main className="pt-28 pb-16">
        <div className="max-w-[1700px] mx-auto px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="lg:hidden mb-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="font-sans text-sm">Menu</span>
          </button>

          <div className="flex gap-12">
            {/* Desktop Sidebar */}
            <Sidebar
              activeSection={activeSection}
              onSectionClick={setActiveSection}
            />

            {/* Mobile Sidebar */}
            <MobileSidebar
              activeSection={activeSection}
              isOpen={isMobileSidebarOpen}
              onClose={() => setIsMobileSidebarOpen(false)}
              onSectionClick={setActiveSection}
            />

            {/* Main Content - All sections rendered sequentially */}
            <div className="flex-1 min-w-0 max-w-4xl space-y-24">
              <ProjectOverview />
              <Objectives />
              <SystemRequirements />
              <HowItWorks />
              <DatasetTraining />
              <Demo />
              <API />
              <Limitations />
              <FutureWork />
              <Community />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
