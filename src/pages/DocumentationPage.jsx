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
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
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
            <Sidebar activeSection={activeSection} />

            {/* Mobile Sidebar */}
            <MobileSidebar
              activeSection={activeSection}
              isOpen={isMobileSidebarOpen}
              onClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* Main Content - All sections rendered sequentially */}
            <div className="flex-1 min-w-0 max-w-4xl space-y-24">
              <ProjectOverview />
              <Objectives />
              <SystemRequirements />
              <HowItWorks />
              <DatasetTraining />
              <Demo />
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
