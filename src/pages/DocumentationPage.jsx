import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { socialLinks } from "../config";
import { FeedbackModal } from "../sections/feedback/FeedbackSection";
import { scrollToElement } from "../utils/scroll";
import MediaWrapper from "../components/ui/MediaWrapper";
import DatasetCollage from "../components/visuals/DatasetCollage";

// Documentation sections data
const sections = [
  { id: "project-overview", label: "Project Overview" },
  { id: "objectives", label: "Objectives" },
  { id: "system-requirements", label: "System Requirements" },
  { id: "how-it-works", label: "How It Works" },
  { id: "dataset-training", label: "Dataset & Training" },
  { id: "demo", label: "Demo" },
  { id: "limitations", label: "Limitations" },
  { id: "future-work", label: "Future Work" },
  { id: "community", label: "Community" },
];

// Scroll to section helper
function scrollToSection(sectionId) {
  scrollToElement(sectionId, 120);
}

// Sidebar Navigation
function Sidebar({ activeSection }) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <nav className="sticky top-28 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
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
}

// Mobile Sidebar
function MobileSidebar({ activeSection, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-background border-r border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-white font-semibold">Documentation</span>
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
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                onClose();
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-sans transition-colors rounded-lg ${
                activeSection === section.id
                  ? "text-white font-medium bg-white/5"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

// Project Overview Section
function ProjectOverview() {
  return (
    <section id="project-overview">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Project Overview
      </h1>

      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {/* <MediaWrapper
          src="/src/assets/images/misc/hand-landmark.webp"
          alt="Hand landmark detection"
          className="w-full max-w-2xl mx-auto"
        /> */}
        <div className="p-8 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/20 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-orange-400/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
                />
              </svg>
            </div>
            <p className="text-white/40 text-sm">Hand Landmark Detection</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System is a web-based application
          developed as a Capstone Project for Year 3 students in the Data
          Science specialization and Computer Science department. The purpose of
          this system is to assist communication by translating Khmer sign
          language gestures into readable text and spoken output through a
          simple web interface.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          This project uses computer vision and machine learning techniques to
          recognize hand gestures in real time. When a user performs a sign in
          front of a camera, the system detects hand movements using MediaPipe
          and processes the gesture through a trained deep learning model built
          with PyTorch. The predicted result is then displayed as text and can
          be converted into speech to make communication easier with non-sign
          language users.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Instead of building the model from scratch, this project fine-tunes a
          pre-trained model with a Khmer sign language dataset prepared by the
          team. This approach allows the system to better recognize local
          gestures while reducing development time. The team focuses on data
          processing, model optimization, and system integration to improve
          performance and usability.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          As this project is still under active development, the system may not
          always produce perfect translations. Accuracy and coverage are
          continuously being improved, and more gestures will be added in future
          updates. The current version demonstrates a functional prototype that
          shows how artificial intelligence can support accessibility and
          learning.
        </p>
      </div>
    </section>
  );
}

// Objectives Section
function Objectives() {
  const specificObjectives = [
    "To design a real-time gesture recognition system that can detect and interpret Khmer sign language movements using a webcam.",
    "To translate recognized gestures into meaningful and readable text on the screen.",
    "To convert translated text into speech to support communication with non-sign language users.",
    "To fine-tune an existing machine learning model using a Khmer sign language dataset in order to improve accuracy and local relevance.",
    "To build a responsive and user-friendly web interface that can be accessed easily through a browser.",
    "To optimize the system for smooth performance and reduced delay during real-time translation.",
    "To test the system under different conditions such as lighting and hand position.",
    "To collect feedback from users to identify weaknesses and areas for improvement.",
    "To expand the number of supported signs as data becomes available.",
  ];

  return (
    <section id="objectives">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Objectives
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 mb-10">
        <p className="text-white/70 font-sans leading-relaxed">
          The primary objective of this project is to design and develop a
          web-based Khmer Sign Language Translation System that can recognize
          hand gestures and translate them into readable text and spoken output
          in real time. The system aims to serve as both a learning tool and a
          communication aid by combining computer vision and machine learning
          technologies in an accessible web application.
        </p>

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
}

// System Requirements Section
function SystemRequirements() {
  const sections = [
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
        "Microphone and speakers or headphones for speech output functionality.",
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
        "PyTorch for machine learning model fine-tuning and inference.",
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

  return (
    <section id="system-requirements">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        System Requirements
      </h1>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline line */}
            {index < sections.length - 1 && (
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
}

// How It Works Section
function HowItWorks() {
  return (
    <section id="how-it-works">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        How It Works
      </h1>

      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System processes user gestures
          through a series of stages that convert visual hand movements into
          readable text and spoken output. The system combines computer vision
          techniques with a trained machine learning model to provide real-time
          translation through a web-based interface.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          First, the user performs Khmer sign language gestures in front of
          their device's camera. The web application continuously captures video
          frames and sends them to the processing system. To ensure reliable
          tracking, the user must keep their hands within the camera view and
          perform gestures clearly.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Next, the system uses MediaPipe to detect and track the user's hands.
          MediaPipe identifies key hand landmarks such as finger joints and palm
          positions. These landmarks represent the gesture in numeric form,
          allowing the system to understand the shape and movement of the hand
          instead of raw images. This step improves processing speed and reduces
          noise caused by background details.
        </p>

        {/* Image 1 - Hand Landmark Detection */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src="/src/assets/images/how-it-work/how-it-work-1.webp"
              alt="Hand landmark detection using MediaPipe"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Example of hand landmark detection using MediaPipe.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          Once the hand landmarks are detected, the extracted features are
          passed into a deep learning model built with PyTorch. The model has
          been fine-tuned using a dataset of Khmer sign language gestures,
          allowing it to learn patterns specific to local signs. The model
          analyzes the landmarks and predicts the most likely gesture being
          performed.
        </p>

        {/* Image 2 - Gesture Processing */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src="/src/assets/images/how-it-work/how-it-work-2.webp"
              alt="Gesture features being processed by the trained recognition model"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Gesture features being processed by the trained recognition model.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          After prediction, the system converts the recognized sign into text
          and displays it in real time on the interface. This allows the user to
          immediately see translation results as they perform gestures.
        </p>

        {/* Image 3 - Real-time Output */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src="/src/assets/images/how-it-work/how-it-work-3.webp"
              alt="Real-time output showing translated text and speech feature"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Real-time output showing translated text and speech feature.
          </figcaption>
        </figure>

        <p className="text-white/70 font-sans leading-relaxed">
          For improved accessibility, the system also supports speech output.
          The translated text is sent to a text-to-speech engine, which produces
          audio feedback. This enables communication between sign language users
          and people who do not understand sign language.
        </p>

        <p className="text-white/70 font-sans leading-relaxed">
          Finally, the system stores feedback and testing data (if enabled) to
          help improve performance. Ongoing updates aim to refine accuracy,
          optimize speed, and expand the number of supported gestures.
        </p>
      </div>
    </section>
  );
}

// Dataset & Training Section
function DatasetTraining() {
  return (
    <section id="dataset-training">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Dataset & Training
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        The performance of the Khmer Sign Language Translation System depends
        largely on the quality and structure of the dataset used during
        training. To adapt the system for Khmer sign language, the model was
        fine-tuned using a dataset that represents common signs and hand
        gestures used in real communication.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Data Description
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            The dataset consists of recorded gesture samples representing over
            120 Khmer sign language signs. Each sign is captured from multiple
            angles and under different lighting conditions to help the model
            generalize across environments. The dataset includes variations in
            hand shape, motion, and position to improve the system's robustness.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            For each gesture, video frames are processed to extract hand
            landmarks using MediaPipe. Instead of training on raw images alone,
            the system uses landmark coordinates as features, enabling more
            efficient learning and reduced computational requirements.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            All data was collected, organized, and labeled by the project team.
            Each class (sign) is labeled carefully to ensure consistency during
            training and evaluation. Data cleaning and validation steps were
            performed to remove noisy or incomplete samples.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                100+
              </span>
              <span className="text-white/60 text-sm font-sans">
                Training Samples
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                120+
              </span>
              <span className="text-white/60 text-sm font-sans">
                Gesture Classes
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                6
              </span>
              <span className="text-white/60 text-sm font-sans">
                Contributors
              </span>
            </div>
          </div>

          {/* Dataset Images Collage */}
          <DatasetCollage />
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Model Architecture
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            We utilize a fine-tuned deep learning model based on a pre-trained
            architecture. The model was adapted specifically for Khmer sign
            language recognition through transfer learning techniques.
          </p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className="font-sans font-semibold text-white mb-3">
              Key Technologies:
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "MediaPipe Hands",
                "PyTorch",
                "Transfer Learning",
                "Data Augmentation",
                "Real-time Inference",
                "Model Optimization",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-white/60 text-sm font-sans"
                >
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Training Process
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            The model was trained using a supervised learning approach, where
            each gesture sample was paired with its corresponding label.
            Training was conducted over multiple epochs, with the dataset split
            into training and validation sets to monitor performance and avoid
            overfitting.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            During training, data augmentation techniques such as rotation,
            scaling, and brightness adjustment were applied to increase dataset
            diversity and improve the model's ability to generalize across
            different users and environments.
          </p>
          <p className="text-white/70 font-sans leading-relaxed">
            Loss functions and accuracy metrics were tracked throughout training
            to ensure the model was learning effectively. The final model was
            selected based on validation accuracy and tested on unseen data to
            confirm reliable performance.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Model Optimization
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            To ensure smooth real-time performance in a web environment, several
            optimization techniques were applied to the trained model. These
            improvements help reduce latency and improve responsiveness during
            gesture recognition.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Model Quantization:</strong>{" "}
                Reducing the precision of model weights to decrease file size
                and speed up inference without significant loss in accuracy.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">
                  Lightweight Architecture:
                </strong>{" "}
                Using a compact neural network structure optimized for real-time
                applications on standard hardware.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Efficient Preprocessing:</strong>{" "}
                Streamlining the landmark extraction process to minimize delay
                between gesture input and model prediction.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Batch Processing:</strong>{" "}
                Handling multiple frames efficiently to maintain consistent
                performance during continuous gesture recognition.
              </span>
            </li>
          </ul>
          <p className="text-white/70 font-sans leading-relaxed">
            These optimizations allow the system to run efficiently in a browser
            without requiring specialized hardware, making it accessible to a
            wider range of users.
          </p>
        </div>
      </div>
    </section>
  );
}

// Demo Section
function Demo() {
  return (
    <section id="demo">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Demo
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-6">
        The Demo section provides users with a practical, interactive way to
        experience the Khmer Sign Language Translation System in action. This
        section is designed to showcase how gestures are translated into text
        and speech in real time, highlighting the system's capabilities and user
        interface.
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
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-semibold flex items-center justify-center">
              5
            </span>
            <div>
              <span className="text-white font-medium">
                Hear Speech Output:
              </span>
              <span className="text-white/70 font-sans">
                {" "}
                For supported gestures, the text is also converted to speech,
                allowing interaction with non-sign language users.
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
              <strong className="text-white">Speech Output:</strong> Converts
              text into spoken audio for accessibility.
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
}

// Limitations Section
function Limitations() {
  const limitations = [
    {
      title: "Limited Vocabulary",
      description:
        "The system currently recognizes approximately 120 Khmer sign language gestures. Many signs, especially regional variations or less common expressions, are not yet included.",
    },
    {
      title: "Lighting Sensitivity",
      description:
        "Hand detection relies on visual input and works best in well-lit environments. Low light, backlighting, or harsh shadows can reduce detection accuracy.",
    },
    {
      title: "Background Requirements",
      description:
        "Complex or cluttered backgrounds may confuse the hand tracking model. A plain, contrasting background improves recognition reliability.",
    },
    {
      title: "Single User Detection",
      description:
        "The system is designed to detect one user at a time. Multiple hands from different people in the frame may cause confusion or incorrect predictions.",
    },
    {
      title: "Static Gesture Focus",
      description:
        "The model primarily recognizes static hand poses. Dynamic gestures involving motion or transitions between signs may not be fully captured.",
    },
    {
      title: "Browser Compatibility",
      description:
        "The web application works best on modern browsers like Chrome, Edge, or Firefox. Older browsers or mobile devices may experience reduced performance.",
    },
    {
      title: "No Offline Support",
      description:
        "The system requires an internet connection to load the model and dependencies. Offline functionality is not currently available.",
    },
    {
      title: "Speech Output Limitations",
      description:
        "Text-to-speech output depends on browser support and available voices. Khmer language voice quality may vary across different devices and browsers.",
    },
  ];

  return (
    <section id="limitations">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Limitations
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        As a Capstone student project, the Khmer Sign Language Translation
        System demonstrates the core concept of translating gestures into text
        and speech, but it has several limitations that users and developers
        should be aware of. Understanding these limitations helps set realistic
        expectations and guides future improvements.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {limitations.map((item, index) => (
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
    </section>
  );
}

// Future Work Section
function FutureWork() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Expand Gesture Vocabulary",
      description:
        "Increase the number of recognizable signs by collecting more gesture samples and retraining the model. Priority will be given to commonly used words and phrases in daily conversation.",
      status: "in-progress",
    },
    {
      phase: "Phase 2",
      title: "Improve Model Accuracy",
      description:
        "Enhance recognition accuracy through better data augmentation, model fine-tuning, and handling of edge cases such as varied lighting and hand sizes.",
      status: "planned",
    },
    {
      phase: "Phase 3",
      title: "Support Dynamic Gestures",
      description:
        "Extend the system to recognize motion-based signs that involve hand movement over time, not just static hand poses.",
      status: "planned",
    },
    {
      phase: "Phase 4",
      title: "Add Two-Hand Gesture Recognition",
      description:
        "Implement support for signs that require both hands, which are common in Khmer sign language for complex expressions.",
      status: "planned",
    },
    {
      phase: "Phase 5",
      title: "Mobile Application Development",
      description:
        "Create a mobile-friendly version or native app to allow users to access the translation system on smartphones and tablets.",
      status: "planned",
    },
    {
      phase: "Phase 6",
      title: "Offline Functionality",
      description:
        "Enable the system to work without an internet connection by bundling the model locally using technologies like TensorFlow Lite or ONNX.",
      status: "research",
    },
    {
      phase: "Phase 7",
      title: "Reverse Translation (Text to Sign)",
      description:
        "Develop a feature that converts text input into animated sign language visuals, enabling two-way communication between hearing and deaf users.",
      status: "research",
    },
    {
      phase: "Phase 8",
      title: "Community Contribution Platform",
      description:
        "Build a platform where users can contribute new gesture samples, suggest corrections, and help expand the dataset collaboratively.",
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

  return (
    <section id="future-work">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Future Work
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        The Khmer Sign Language Translation System is a functional prototype
        that demonstrates real-time gesture recognition, text translation, and
        speech output. However, there are several areas identified for
        improvement and expansion to make the system more comprehensive,
        accurate, and user-friendly. The following are the primary directions
        for future development:
      </p>

      <div className="space-y-4">
        {roadmap.map((item, index) => (
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
    </section>
  );
}

// Community Section
function Community() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

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
      href: githubLink?.href || "#",
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
          href="#"
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
}

// Download Docs Button Component
const DownloadDocsButton = ({ isMobile = false }) => {
  const handleDownload = () => {
    // Trigger print mode for downloading/printing the documentation
    window.print();
  };

  return (
    <button
      onClick={handleDownload}
      className={`${
        isMobile ? "w-full justify-center" : "ml-auto"
      } inline-flex items-center gap-2 rounded-full border border-white/20 px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/5`}
    >
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      Download Docs
    </button>
  );
};

// Custom header for documentation with Download button
function DocHeader() {
  return (
    <Header showDemoButton={false} customButton={<DownloadDocsButton />} />
  );
}

// Main Documentation Page
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
