import React from "react";

const specificObjectives = [
  "To design a real-time gesture recognition system that can detect and interpret Khmer sign language movements using a webcam.",
  "To translate recognized gestures into meaningful and readable text on the screen.",
  "To fine-tune an existing machine learning model using a Khmer sign language dataset to improve accuracy and local relevance.",
  "To build a responsive and user-friendly web interface that can be accessed easily through a browser.",
  "To optimize the system for smooth performance and reduced delay during real-time translation.",
  "To test the system under different conditions such as lighting and hand position.",
  "To collect feedback from users to identify weaknesses and areas for improvement.",
  "To expand the number of supported signs as data becomes available.",
];

/**
 * Objectives Section Component
 */
export const Objectives = React.memo(() => {
  return (
    <section id="objectives">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Objectives
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 mb-10">
        <h2 className="font-sans text-xl font-semibold text-white mb-4">
          Primary Objectives
        </h2>
        <p className="text-white/70 font-sans leading-relaxed">
          This project's main goal is to create a web-based Khmer Sign Language
          Translation System that can identify hand gestures and instantly
          translate them into readable text. By integrating computer vision and
          machine learning technologies into an accessible web application, the
          system seeks to function as a communication tool as well as a learning
          tool.
        </p>

        <h2 className="font-sans text-xl font-semibold text-white mb-4 mt-6">
          Secondary Objectives
        </h2>
        <p className="text-white/70 font-sans leading-relaxed">
          This project also focuses on improving the understanding of artificial
          intelligence implementation in real-world scenarios. By working with
          datasets, pre-trained models, and system integration, the team gains
          hands-on experience in building practical machine learning
          applications that go beyond theory.
        </p>
      </div>

      <h2 className="font-sans text-xl font-semibold text-white mb-6">
        Specific Objectives
      </h2>

      <ul className="space-y-4">
        {specificObjectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-white/40 mt-1.5">•</span>
            <span className="text-white/70 font-sans leading-relaxed">
              {objective}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
});

Objectives.displayName = "Objectives";
