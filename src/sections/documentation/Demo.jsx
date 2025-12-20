import React from "react";
import { Link } from "react-router-dom";

/**
 * Demo Section Component
 */
export const Demo = React.memo(() => {
  return (
    <section id="demo">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Demo
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-6">
        The Demo section provides users with a practical, interactive way to
        experience the Khmer Sign Language Translation System in action. This
        section is designed to showcase how gestures are translated into text
        in real time, highlighting the system's capabilities and user interface.
      </p>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        Experience the Khmer Sign Language Translation System firsthand. Our
        interactive demo allows you to test the system using your webcam in
        real-time.
      </p>

      <div className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-brand-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
        <h3 className="font-sans font-semibold text-white mb-2">
          Try the Live Demo
        </h3>
        <p className="text-white/70 text-sm font-sans mb-6 max-w-md mx-auto">
          Click the button below to access the demo page where you can test sign
          language translation with your webcam.
        </p>
        <Link
          to="/demo"
          className="inline-flex items-center gap-2 px-7 py-3 bg-brand-primary hover:bg-brand-primary/90 rounded-full text-white font-sans text-sm font-semibold transition-colors shadow-[0_15px_45px_rgba(47,107,255,0.45)]"
        >
          Launch Demo
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
        </Link>
      </div>

      {/* How to Use the Demo */}
      <div className="mt-10">
        <h2 className="font-sans text-xl font-semibold text-white mb-6">
          How to Use the Demo
        </h2>
        <ol className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-semibold flex items-center justify-center">
              1
            </span>
            <div>
              <span className="text-white font-medium">
                Access the Demo Page:
              </span>
              <span className="text-white/70 font-sans">
                {" "}
                Open the Demo page on a modern web browser such as Chrome, Edge,
                or Firefox.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-semibold flex items-center justify-center">
              2
            </span>
            <div>
              <span className="text-white font-medium">
                Enable Camera Access:
              </span>
              <span className="text-white/70 font-sans">
                {" "}
                The system requires permission to access your device's camera to
                capture gestures.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-semibold flex items-center justify-center">
              3
            </span>
            <div>
              <span className="text-white font-medium">Perform Gestures:</span>
              <span className="text-white/70 font-sans">
                {" "}
                Hold your hands clearly in front of the camera and perform Khmer
                sign language gestures. Ensure proper lighting and positioning
                for accurate detection.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-semibold flex items-center justify-center">
              4
            </span>
            <div>
              <span className="text-white font-medium">View Translation:</span>
              <span className="text-white/70 font-sans">
                {" "}
                The system displays the recognized gesture as text immediately
                on the screen.
              </span>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
        <div className="flex items-start gap-3">
          <svg
            className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <div>
            <h4 className="font-sans font-semibold text-yellow-400 mb-1">
              Demo Requirements
            </h4>
            <p className="text-white/60 text-sm font-sans">
              Please ensure you have a working webcam and have granted camera
              permissions to your browser. For best results, use good lighting
              and position your hands clearly in front of the camera.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Demonstrated */}
      <div className="mt-10">
        <h2 className="font-sans text-xl font-semibold text-white mb-4">
          Key Features Demonstrated in the Demo
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">
                Real-Time Gesture Recognition:
              </strong>{" "}
              Translates gestures instantly without noticeable delay.
            </span>
          </li>
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Multi-Gesture Support:</strong>{" "}
              Recognizes over 120 Khmer signs.
            </span>
          </li>
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Responsive Interface:</strong>{" "}
              Works smoothly on different screen sizes and devices.
            </span>
          </li>
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Accuracy Feedback:</strong>{" "}
              Displays results clearly so users can see which gestures are
              successfully recognized.
            </span>
          </li>
        </ul>
      </div>

      {/* Demo Purpose */}
      <div className="mt-10">
        <h2 className="font-sans text-xl font-semibold text-white mb-4">
          Demo Purpose
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Testing and Feedback:</strong>{" "}
              Users can provide real-time feedback on the system's performance.
            </span>
          </li>
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Educational Tool:</strong>{" "}
              Demonstrates how AI and computer vision can be applied to
              accessibility and language translation.
            </span>
          </li>
          <li className="flex items-start gap-2 text-white/70 font-sans">
            <span className="text-white/40 mt-0.5">•</span>
            <span>
              <strong className="text-white">Project Showcase:</strong> Allows
              instructors, peers, or potential collaborators to experience the
              system firsthand.
            </span>
          </li>
        </ul>
      </div>

      {/* Note */}
      <div className="mt-10 pl-4 border-l-4 border-white/20">
        <p className="text-white/70 font-sans leading-relaxed">
          The demo is based on a student project prototype. While most common
          gestures are recognized, the system may occasionally misinterpret rare
          or complex signs. Accuracy improves as more data is collected and the
          model is fine-tuned.
        </p>
      </div>
    </section>
  );
});

Demo.displayName = "Demo";
