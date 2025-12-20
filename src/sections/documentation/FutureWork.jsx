import React from "react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Expansion of Gesture Vocabulary",
    description:
      "Future work may expand the recognized gesture set from over 40 gestures to more than 100, with an emphasis on commonly used words and phrases. This expansion could also include numerical gestures as well as signs for days of the week and months to improve practical communication coverage.",
    status: "in-progress",
  },
  {
    phase: "Phase 2",
    title: "Improvement of Model Accuracy",
    description:
      "Model performance can be enhanced through more advanced data augmentation techniques, improved model architectures, and better handling of edge cases such as occlusion, varying lighting conditions, and user variability.",
    status: "planned",
  },
  {
    phase: "Phase 3",
    title: "Text-to-Speech Output",
    description:
      "Implement text-to-speech functionality to convert translated text into spoken audio. This would enable communication between sign language users and people who do not understand sign language, enhancing accessibility and usability of the system.",
    status: "planned",
  },
  {
    phase: "Phase 4",
    title: "Mobile Optimization",
    description:
      "Further development may focus on optimizing the application for mobile devices by improving responsive design, implementing touch-friendly controls, and applying mobile-specific performance optimizations to enhance usability on smartphones and tablets.",
    status: "planned",
  },
  {
    phase: "Phase 5",
    title: "Support for Dynamic Gestures",
    description:
      "Future enhancements may include the recognition of dynamic, motion-based signs through temporal sequence modeling techniques. This would enable the system to capture gesture transitions and continuous movements, thereby improving recognition of more complex sign language expressions.",
    status: "planned",
  },
  {
    phase: "Phase 6",
    title: "Two-Hand Gesture Recognition",
    description:
      "The system could be extended to support two-hand gestures by enhancing dual-hand detection capabilities and improving feature extraction methods. This would allow recognition of more complex gestures that require coordinated hand movements.",
    status: "planned",
  },
  {
    phase: "Phase 7",
    title: "Offline Functionality",
    description:
      "Future development may explore offline operation by bundling trained models directly within the application. This could involve converting models to lightweight formats such as TensorFlow Lite or ONNX and implementing Progressive Web App (PWA) support to enable functionality without continuous internet connectivity.",
    status: "research",
  },
  {
    phase: "Phase 8",
    title: "Reverse Translation (Text-to-Sign)",
    description:
      "Future work may include implementing reverse translation functionality that converts textual input into animated sign language representations. This could involve the use of avatar-based sign language displays, enabling two-way communication between sign language users and non-signers.",
    status: "research",
  },
  {
    phase: "Phase 9",
    title: "Community Contribution Platform",
    description:
      "The system could be extended with a community-driven platform that allows users to submit gesture samples. Such an approach would support collaborative dataset expansion and continuous improvement of model performance through community contributions.",
    status: "research",
  },
  {
    phase: "Phase 10",
    title: "Multi-Language Support",
    description:
      "Future enhancements may include support for additional sign languages beyond Khmer Sign Language. This would require implementing language-switching functionality and exploring cross-language sign translation to increase the system's applicability across different linguistic contexts.",
    status: "research",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "in-progress":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "planned":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "research":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-white/10 text-white/60 border-white/20";
  }
};

/**
 * Future Work Section Component
 */
export const FutureWork = React.memo(() => {
  return (
    <section id="future-work">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Future Work
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        The Khmer Sign Language Translation System is a functional prototype
        that demonstrates real-time gesture recognition and text translation.
        However, there are several areas identified for improvement and expansion
        to make the system more comprehensive, accurate, and user-friendly. The
        following are the primary directions for future development:
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Short-Term Enhancements (Next 2 Months)
          </h2>
          <div className="space-y-4">
            {roadmap.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Medium-Term Enhancements (Next 6-12 Months)
          </h2>
          <div className="space-y-4">
            {roadmap.slice(3, 7).map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Long-Term Enhancements (Next 6-12 Months)
          </h2>
          <div className="space-y-4">
            {roadmap.slice(7).map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-brand-primary font-semibold uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

FutureWork.displayName = "FutureWork";
