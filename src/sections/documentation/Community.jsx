import React, { useState } from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../../config";
import { FeedbackModal } from "../feedback/FeedbackSection";

const howYouCanHelp = [
  {
    title: "Feedback & Suggestions",
    description: "Tell us what works, what doesn't, and how we can improve.",
    icon: (
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
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    isFeedback: true,
  },
  {
    title: "Collaborate",
    description:
      "If you're a developer, student, or researcher, help us expand the dataset or features.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0zm-1 0c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A5 5 0 0 1 5 14zM15 14c0 .7-.144 1.368-.404 1.973Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.24.358.379.787.379 1.25z"
        />
      </svg>
    ),
    href: "/contact",
  },
];

/**
 * Community Section Component
 */
export const Community = React.memo(() => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  // Get GitHub and Discord from centralized social links
  const githubLink = socialLinks.find((link) => link.name === "GitHub");
  const discordLink = socialLinks.find((link) => link.name === "Discord");

  const joinDiscussion = [
    {
      title: "GitHub",
      description: "Report issues, propose improvements, or share ideas.",
      icon: githubLink
        ? React.cloneElement(githubLink.icon, {
            className: "w-6 h-6",
          })
        : null,
      href: "https://github.com/Phal-Sovandy/Khmer-Sign-Language-Translation-System",
    },
    {
      title: "Discord",
      description:
        "Chat with the team in real time and get announcements about new gestures, demos, and system improvements.",
      icon: discordLink
        ? React.cloneElement(discordLink.icon, {
            className: "w-6 h-6",
          })
        : null,
      href: discordLink?.href || "#",
    },
  ];

  return (
    <section id="community">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Community
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        Join our growing community and help us make Khmer Sign Language
        accessible to everyone. Connect, collaborate, and share feedback to
        improve our system!
      </p>

      {/* How You Can Help */}
      <div className="mb-10">
        <h2 className="font-sans text-xl font-semibold text-white mb-6">
          How You Can Help
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {howYouCanHelp.map((item, index) =>
            item.isFeedback ? (
              <button
                key={index}
                onClick={() => setIsFeedbackModalOpen(true)}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group text-left w-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <svg
                    className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-sans">
                  {item.description}
                </p>
              </button>
            ) : (
              <Link
                key={index}
                to={item.href}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <svg
                    className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm font-sans">
                  {item.description}
                </p>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Join the Discussion */}
      <div>
        <h2 className="font-sans text-xl font-semibold text-white mb-6">
          Join the Discussion
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {joinDiscussion.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <svg
                  className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm font-sans">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-brand-primary/10 border border-brand-primary/20 rounded-xl">
        <h3 className="font-sans font-semibold text-white mb-2">
          Want to Contribute?
        </h3>
        <p className="text-white/70 font-sans text-sm mb-4">
          We're always looking for contributors to help improve the system.
          Whether you're a developer, designer, researcher, or sign language
          expert, there's a place for you in our community.
        </p>
        <a
          href="https://github.com/Phal-Sovandy/Khmer-Sign-Language-Translation-System-Web/blob/main/CONTRIBUTING.md"
          target="_blank"
          className="inline-flex items-center gap-2 text-brand-primary font-sans text-sm font-semibold hover:underline"
        >
          View Contribution Guidelines
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </section>
  );
});

Community.displayName = "Community";
