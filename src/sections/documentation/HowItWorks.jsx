import React from "react";
import MediaWrapper from "../../components/ui/MediaWrapper";
import overallSystemArchitecture from "../../assets/images/how-it-work/overall-sys-architecture.webp";
import backendArchitecture from "../../assets/images/how-it-work/backend-architecture.webp";
import landmarknetArchitecture from "../../assets/images/how-it-work/landmarknet-architecture.webp";
import realTimeDetection from "../../assets/images/misc/demo.webp";
import lossAccuracyCurves from "../../assets/images/loss_accuracy_curves.webp";

/**
 * How It Works Section Component
 */
export const HowItWorks = React.memo(() => {
  return (
    <section id="how-it-works">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        How It Works
      </h1>

      <div className="prose prose-invert max-w-none space-y-6">
        <h2 className="font-sans text-xl font-semibold text-white mb-4">
          Processing Pipeline
        </h2>
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System processes user gestures
          through a series of stages that convert visual hand movements into
          readable text. The system combines computer vision techniques with a
          trained machine learning model to provide real-time translation through
          a web-based interface.
        </p>

        {/* Overall System Architecture */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white border border-white/10 p-4">
            <MediaWrapper
              src={overallSystemArchitecture}
              alt="Overall system architecture diagram"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Overall system architecture showing the complete processing pipeline.
          </figcaption>
        </figure>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Stage 1: Video Capture
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          In front of the camera on their device, the user first makes gestures
          in Khmer sign language. Video frames are continuously captured by the
          web application and sent to the processing system. The user must make
          clear gestures and keep their hands in the camera's field of view in
          order to guarantee accurate tracking.
        </p>
        <p className="text-white/70 font-sans leading-relaxed">
          The user's webcam is accessed by the frontend application via the
          browser's MediaStream API, which records frames at regular intervals
          (usually 30 frames per second). Before being transmitted to the backend
          server, each frame is transformed into a base64-encoded image format.
        </p>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Stage 2: Hand Landmark Detection
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          The system then tracks and detects the user's hands using MediaPipe.
          Important hand landmarks like finger joints and palm positions are
          recognised by MediaPipe. Instead of using raw images, the system can
          comprehend the shape and movement of the hand thanks to these
          landmarks, which represent the gesture in numerical form. This step
          decreases background detail noise and speeds up processing.
        </p>
        <p className="text-white/70 font-sans leading-relaxed">
          MediaPipe Hands provides 21 hand landmarks per hand: 4 landmarks for
          each finger (thumb, index, middle, ring, pinky) and 1 landmark for
          the wrist. Each landmark is represented by normalized coordinates (x,
          y) relative to the image dimensions, making the detection
          scale-invariant.
        </p>
        <p className="text-white/70 font-sans leading-relaxed">
          The system extracts 38 features per hand (21 landmarks × 2
          coordinates). For two-hand gestures, the system concatenates
          features from both hands (84 total features). Landmark coordinates are
          normalized to improve model generalization.
        </p>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Stage 3: Feature Extraction and Normalization
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          Once the hand landmarks are detected, the extracted features are
          normalized to ensure consistent input to the machine learning model.
          The normalization process includes mean centering (subtracting the
          mean of landmark coordinates), standard scaling (dividing by the
          standard deviation to normalize the scale), and feature concatenation
          (combining x and y coordinates into a single feature vector). This
          normalization process makes the model robust to variations in hand
          size, position, and camera distance.
        </p>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Stage 4: Gesture Classification
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          A PyTorch-built deep learning model receives the normalised features.
          A dataset of Khmer sign language gestures has been used to refine the
          model, enabling it to recognise patterns unique to regional signs.
          The model determines which gesture is most likely to be made by
          analysing the landmarks.
        </p>
        <p className="text-white/70 font-sans leading-relaxed">
          The model architecture includes: Input Layer with 84 features (42 per
          hand × 2 hands), Hidden Layer 1 with 128 neurons with ReLU activation
          and 0.3 dropout, Hidden Layer 2 with 64 neurons with ReLU activation
          and 0.2 dropout, and Output Layer with the number of classes (38
          gesture classes). The model outputs a probability distribution over all
          possible gesture classes, and the class with the highest probability is
          selected as the prediction.
        </p>

        {/* LandmarkNet Architecture */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white border border-white/10 p-4">
            <MediaWrapper
              src={landmarknetArchitecture}
              alt="LandmarkNet model architecture diagram"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            LandmarkNet model architecture showing the neural network structure.
          </figcaption>
        </figure>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Stage 5: Text Translation
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          After prediction, the system converts the recognized sign into text
          and displays it in real time on the interface. This allows the user to
          immediately see translation results as they perform gestures.
        </p>
        <p className="text-white/70 font-sans leading-relaxed">
          The system uses a conversion mapping file (converts.json) to translate
          model predictions (form names like "form_a") into human-readable Khmer
          text. This mapping ensures that the output is meaningful and culturally
          appropriate.
        </p>

        {/* Backend Architecture */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white border border-white/10 p-4">
            <MediaWrapper
              src={backendArchitecture}
              alt="Backend processing pipeline for gesture recognition"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Backend processing pipeline showing the complete gesture recognition flow.
          </figcaption>
        </figure>

        {/* Image 3 - Real-time Output */}
        <figure className="my-8">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <MediaWrapper
              src={realTimeDetection}
              alt="Real-time output showing translated text"
              className="w-full"
            />
          </div>
          <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
            Real-time output showing translated text.
          </figcaption>
        </figure>

        <h3 className="font-sans text-lg font-semibold text-white mb-3 mt-6">
          Real-Time Performance
        </h3>
        <p className="text-white/70 font-sans leading-relaxed">
          The system is designed and optimized for real-time gesture recognition.
          Average latency ranges between 10 and 50 milliseconds per frame on
          CPU-based processing, and between 5 and 20 milliseconds per frame when
          utilizing GPU acceleration. The application is capable of processing up
          to 30 frames per second, ensuring smooth visualization of hand
          gestures. Throughput has been optimized to handle multiple concurrent
          requests without performance degradation. Furthermore, resource usage
          has been minimized, allowing the system to operate efficiently on
          standard hardware without requiring specialized GPUs.
        </p>

        {/* Training Progress Graphs */}
        <div className="my-8 space-y-8">
          <h3 className="font-sans text-lg font-semibold text-white mb-4">
            Model Training Progress
          </h3>
          
          {/* Loss and Accuracy Curves */}
          <figure>
            <div className="rounded-xl overflow-hidden bg-white border border-white/10 p-4">
              <MediaWrapper
                src={lossAccuracyCurves}
                alt="Training progress graph showing loss and accuracy curves"
                className="w-full"
              />
            </div>
            <figcaption className="text-center text-white/50 text-sm font-sans mt-3">
              Training progress graph showing loss and accuracy curves across training epochs.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = "HowItWorks";
