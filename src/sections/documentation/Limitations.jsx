import React from "react";

const technicalLimitations = [
  {
    title: "Limited Vocabulary",
    description:
      "The supported gesture vocabulary is currently limited to 38 gestures, falling short of the targeted coverage of over 100 gestures.",
  },
  {
    title: "Static Gesture Focus",
    description:
      "The recognition framework focuses exclusively on static gestures and does not yet support dynamic or temporal gesture sequences.",
  },
  {
    title: "Lighting Sensitivity",
    description:
      "System performance is sensitive to lighting conditions, requiring adequate illumination for reliable recognition.",
  },
  {
    title: "Background Requirements",
    description:
      "Optimal performance is achieved when gestures are performed against plain or uncluttered backgrounds, as complex backgrounds may negatively affect accuracy.",
  },
  {
    title: "Single User Detection",
    description:
      "The system is designed for single-user interaction and does not support simultaneous gesture recognition from multiple users.",
  },
];

const modelLimitations = [
  {
    title: "Visually Similar Gestures",
    description:
      "Visually similar gestures may occasionally be misclassified due to overlapping feature representations.",
  },
  {
    title: "Rare Gestures",
    description:
      "Recognition accuracy is reduced for rare gestures with limited training data, reflecting class imbalance within the dataset.",
  },
  {
    title: "User Variability",
    description:
      "System performance may vary across users as a result of differences in individual signing styles.",
  },
  {
    title: "Hand Size Sensitivity",
    description:
      "The model may exhibit sensitivity to significant variations in hand size, which can affect feature extraction and classification accuracy.",
  },
];

const dataLimitations = [
  {
    title: "Dataset Size",
    description:
      "Although it comprises over 22,000 samples across 42 gesture classes, the overall dataset size remains relatively limited for training a highly generalized recognition model.",
  },
  {
    title: "Limited Diversity",
    description:
      "The dataset exhibits limited diversity in terms of user demographics, which may restrict the model's ability to generalize across different populations.",
  },
  {
    title: "Incomplete Coverage",
    description:
      "The gesture coverage is incomplete, as not all Khmer sign language gestures are represented.",
  },
  {
    title: "Manual Collection",
    description:
      "The reliance on manual data collection may introduce variability and inconsistencies in sample quality, potentially affecting model performance.",
  },
];

const userExperienceLimitations = [
  {
    title: "No Speech Output",
    description:
      "The system currently does not support text-to-speech conversion. Speech output functionality is planned for future enhancements but is not available in the current version.",
  },
  {
    title: "Learning Curve",
    description:
      "Users may face a learning curve, as effective use requires understanding optimal gesture positioning.",
  },
  {
    title: "Lighting Dependency",
    description:
      "Reliable performance depends on adequate lighting conditions, which may restrict usage in low-light environments.",
  },
  {
    title: "Browser Compatibility",
    description:
      "Browser compatibility is another consideration, with the system performing best on modern web browsers.",
  },
  {
    title: "No Offline Support",
    description:
      "The system does not support offline operation and requires a stable internet connection for functionality.",
  },
];

/**
 * Limitations Section Component
 */
export const Limitations = React.memo(() => {
  return (
    <section id="limitations">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Limitations
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        Despite its advantages, the system exhibits several limitations that
        users and developers should be aware of. Understanding these limitations
        helps set realistic expectations and guides future improvements.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Technical Limitations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalLimitations.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans leading-relaxed">
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
            Model Limitations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {modelLimitations.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans leading-relaxed">
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
            Data Limitations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {dataLimitations.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans leading-relaxed">
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
            User Experience Limitations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {userExperienceLimitations.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-sans leading-relaxed">
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

Limitations.displayName = "Limitations";
