import React from "react";

const requirementSections = [
  {
    title: "Hardware Requirements",
    subtitle:
      "The following hardware requirements are recommended for optimal performance:",
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
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    items: [
      "A computer or laptop with a working webcam for capturing sign language gestures.",
      "Minimum 4 GB of RAM to allow smooth browser operation during real-time processing.",
      "A modern processor capable of handling video input without lag.",
      "Stable lighting conditions in the user's environment to improve hand detection accuracy.",
    ],
  },
  {
    title: "Software Requirements",
    subtitle: "To access and use the system, users need:",
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
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    items: [
      {
        text: "A modern web browser such as Google Chrome, Microsoft Edge, or Mozilla Firefox.",
      },
      {
        text: "An active internet connection since the application processes data through a web interface.",
      },
      { text: "JavaScript enabled in the browser." },
      {
        text: "A supported operating system such as Windows, macOS, or Linux.",
      },
    ],
  },
  {
    title: "User Requirements",
    subtitle: "Users should:",
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
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    items: [
      "Allow access to the device camera in the browser.",
      "Perform gestures clearly and within the camera frame.",
      "Maintain an appropriate distance from the camera for accurate detection.",
      "Operate the system in an environment with sufficient lighting.",
    ],
  },
  {
    title: "Development Environment (For Developers)",
    subtitle: "For development and testing purposes, the system requires:",
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
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    items: [
      "Python for model training and backend development.",
      "Tensorflow for machine learning model fine-tuning and inference.",
      "MediaPipe for hand and gesture detection.",
      "A web framework for frontend and backend communication.",
      "Required development libraries and dependencies installed through a package manager.",
    ],
    footer: (
      <p className="text-white/60 font-sans leading-relaxed mt-4">
        For more information{" "}
        <a
          href="#"
          className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
        >
          Visit our GitHub Repository.
        </a>
      </p>
    ),
  },
];

/**
 * System Requirements Section Component
 */
export const SystemRequirements = React.memo(() => {
  return (
    <section id="system-requirements">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        System Requirements
      </h1>

      <div className="space-y-6">
        {requirementSections.map((section, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline line */}
            {index < requirementSections.length - 1 && (
              <div className="absolute left-6 top-14 bottom-0 w-px bg-white/10" />
            )}

            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
              {section.icon}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="font-sans text-xl font-semibold text-white mb-2">
                {section.title}
              </h3>
              <p className="text-white/60 font-sans leading-relaxed mb-4">
                {section.subtitle}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-white/60 text-sm font-sans"
                  >
                    <span className="text-white/40 mt-0.5">•</span>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <span
                        className={
                          item.isLink
                            ? "underline decoration-white/30 underline-offset-2"
                            : ""
                        }
                      >
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              {section.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

SystemRequirements.displayName = "SystemRequirements";
