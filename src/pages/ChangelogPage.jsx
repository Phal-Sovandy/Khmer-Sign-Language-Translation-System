import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { changelogs, socialLinks } from "../config";
import { getRelativeTime, formatDate } from "../utils/date";
import { scrollToElement } from "../utils/scroll";
import { SEO } from "../components/seo";

// Scroll to version helper
function scrollToVersion(versionId) {
  scrollToElement(versionId, 120);
}

// Sidebar Navigation
function Sidebar({ activeVersion, versions }) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <nav className="sticky top-28 space-y-1">
        {versions.map((version) => (
          <button
            key={version.versionId}
            onClick={() => scrollToVersion(version.versionId)}
            className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors rounded-lg ${
              activeVersion === version.versionId
                ? "text-white font-medium bg-white/5"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            v {version.version}
          </button>
        ))}
      </nav>
    </aside>
  );
}

// Mobile Sidebar
function MobileSidebar({ activeVersion, versions, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-background border-r border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-white font-semibold">Versions</span>
          <button onClick={onClose} className="text-white/60 hover:text-white">
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
          {versions.map((version) => (
            <button
              key={version.versionId}
              onClick={() => {
                scrollToVersion(version.versionId);
                onClose();
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors rounded-lg ${
                activeVersion === version.versionId
                  ? "text-white font-medium bg-white/5"
                  : "text-white/60 hover:text-white"
              }`}
            >
              v {version.version}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  const [activeVersion, setActiveVersion] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Process all changelogs
  const processedChangelogs = changelogs.map((changelog) => {
    // Convert date array [year, month, day] to Date object
    // Note: month in array is 1-indexed, but Date constructor uses 0-indexed months
    const releaseDate = new Date(
      changelog.date[0],
      changelog.date[1] - 1,
      changelog.date[2]
    );

    const relativeTime = getRelativeTime(releaseDate);
    const formattedDate = formatDate(releaseDate);

    return {
      ...changelog,
      date: `${relativeTime} — ${formattedDate}`,
      versionId: `version-${changelog.version.replace(/\./g, "-")}`,
    };
  });

  // Track active version based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const versionElements = processedChangelogs.map((changelog) => ({
        id: changelog.versionId,
        element: document.getElementById(changelog.versionId),
      }));

      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = versionElements.length - 1; i >= 0; i--) {
        const { id, element } = versionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveVersion(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial active version

    return () => window.removeEventListener("scroll", handleScroll);
  }, [processedChangelogs]);

  // Visit Repository Button Component
  const VisitRepositoryButton = ({ isMobile = false }) => {
    const githubLink =
      "https://github.com/Phal-Sovandy/Khmer-Sign-Language-Translation-System";
    const repositoryUrl = githubLink?.href || "#";

    return (
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          isMobile ? "w-full justify-center" : "ml-auto"
        } inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/5`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        Visit Our Repository
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-brand-background overflow-x-clip">
      <SEO
        title="Changelog"
        url="/changelog"
        keywords="changelog, version history, updates, release notes, what's new, KSLTS updates, feature updates, bug fixes, version changelog, project updates"
      />
      <Header showDemoButton={false} customButton={<VisitRepositoryButton />} />

      <main className="pt-28 pb-16">
        <div className="max-w-[1700px] mx-auto px-8">
          {/* Logo */}
          <div className="text-center my-16 md:my-24">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-[#0000fffa] to-[#c90000] bg-clip-text text-transparent font-display mb-1">
              KSLTS
            </h1>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-white">
              What's new in KSLTS?
            </h2>
          </div>

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
              activeVersion={activeVersion}
              versions={processedChangelogs}
            />

            {/* Mobile Sidebar */}
            <MobileSidebar
              activeVersion={activeVersion}
              versions={processedChangelogs}
              isOpen={isMobileSidebarOpen}
              onClose={() => setIsMobileSidebarOpen(false)}
            />

            {/* All Versions */}
            <div className="flex-1 min-w-0 max-w-4xl space-y-16">
              {processedChangelogs.map((changelog, changelogIndex) => (
                <div
                  key={changelogIndex}
                  id={changelog.versionId}
                  className="scroll-mt-28"
                >
                  <h3 className="font-mono text-2xl font-semibold text-white mb-2">
                    v {changelog.version} -{" "}
                    <span className="text-brand-primary">
                      {changelog.codename}
                    </span>
                  </h3>
                  <p className="text-white/60 font-sans mb-6">
                    {changelog.date}
                  </p>

                  {/* Intro Paragraph */}
                  <p className="text-white/70 font-sans leading-relaxed mb-8">
                    {changelog.intro}
                  </p>

                  {/* Features Section */}
                  <div className="mb-8">
                    <h4 className="font-sans text-xl font-semibold text-white mb-4">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {changelog.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/70 font-sans leading-relaxed"
                        >
                          <span className="text-white/40 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fixes Section */}
                  <div className="mb-8">
                    <h4 className="font-sans text-xl font-semibold text-white mb-4">
                      Fixes
                    </h4>
                    <ul className="space-y-2">
                      {changelog.fixes.map((fix, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/70 font-sans leading-relaxed"
                        >
                          <span className="text-white/40 mt-0.5">•</span>
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvements Section */}
                  <div>
                    <h4 className="font-sans text-xl font-semibold text-white mb-4">
                      Improvements
                    </h4>
                    <ul className="space-y-2">
                      {changelog.improvements.map((improvement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-white/70 font-sans leading-relaxed"
                        >
                          <span className="text-white/40 mt-0.5">•</span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
