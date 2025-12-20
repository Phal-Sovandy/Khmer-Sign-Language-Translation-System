import React from "react";
import DatasetCollage from "../../components/visuals/DatasetCollage";

/**
 * Dataset & Training Section Component
 */
export const DatasetTraining = React.memo(() => {
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
            Dataset Statistics
          </h2>
          
          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                22,000+
              </span>
              <span className="text-white/60 text-sm font-sans">
                Total Samples
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                42
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

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Metric</th>
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Value</th>
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Description/Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Total Samples</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">22,000+</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Total gesture samples collected</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Training Samples</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">17,850+</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">90% of total dataset</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Validation Samples</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">2,100+</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">10% of total dataset</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Number of Gesture Classes</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">42</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Unique Khmer sign language signs</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Samples per Class (Average)</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">525+</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Average samples per gesture class</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Number of Contributors</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">6</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Team members involved in data collection</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Data Format</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">Hand landmarks</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Video frames processed to extract landmarks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4 mt-6">
            Data Description
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            Over 38 Khmer sign language signs are represented by recorded gesture
            samples in the dataset. To aid in the model's environmental
            generalization, each sign is photographed from several perspectives
            and in various lighting conditions. To increase the robustness of the
            system, the dataset contains variations in hand shape, motion, and
            position.
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
            performed to remove noisy or incomplete samples (~2,100 samples, 10%
            were removed during preprocessing).
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            To improve model robustness and generalization, data were collected
            by recording repeated gesture samples from multiple project members.
            Each participant performed every gesture multiple times, with
            approximately ten repetitions per gesture, capturing natural
            variations in hand shape, movement, and execution style. No artificial
            data augmentation techniques were applied; instead, variability was
            achieved through repeated real-world recordings.
          </p>

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
            language recognition through transfer learning techniques. The
            system uses a custom PyTorch neural network called LandmarkNet.
          </p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-4">
            <h4 className="font-sans font-semibold text-white mb-3">
              Model Specifications:
            </h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Model File:</strong> model_epoch39_val0.8799.pth
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Validation Accuracy:</strong> 87.99%
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Training Epochs:</strong> 39
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Model Size:</strong> ~1 MB
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Inference Time:</strong> 10-50ms (CPU), 5-20ms (GPU)
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className="font-sans font-semibold text-white mb-3">
              Architecture Details:
            </h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Input Layer:</strong> 84 features (42 per hand × 2 hands)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Hidden Layer 1:</strong> 128 neurons with ReLU activation and 0.3 dropout
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Hidden Layer 2:</strong> 64 neurons with ReLU activation and 0.2 dropout
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Output Layer:</strong> Number of classes (38 gesture classes)
                </span>
              </li>
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
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-4">
            <h4 className="font-sans font-semibold text-white mb-3">
              Training Configuration:
            </h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Optimizer:</strong> Adam optimizer with learning rate scheduler
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Loss Function:</strong> Cross-entropy loss function
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Batch Size:</strong> 32
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Training Epochs:</strong> 39 epochs with early stopping
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Dataset Split:</strong> 80% training, 20% validation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Initial Learning Rate:</strong> 0.001 with gradual decay
                </span>
              </li>
            </ul>
          </div>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            During training, both the loss function and accuracy metrics were
            monitored continuously to ensure effective learning and convergence.
            The final model was selected based on peak validation accuracy and
            subsequently evaluated on unseen data to confirm its generalization
            performance.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            Training performance progressed as follows:
          </p>
          <ul className="space-y-2 mb-4 text-white/70 text-sm font-sans">
            <li className="flex items-start gap-2">
              <span className="text-white/40 mt-0.5">•</span>
              <span><strong className="text-white">Initial Accuracy (Epoch 1):</strong> Approximately 71.93%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40 mt-0.5">•</span>
              <span><strong className="text-white">Epoch 10:</strong> 83.42% accuracy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40 mt-0.5">•</span>
              <span><strong className="text-white">Epoch 20:</strong> 85.71% accuracy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/40 mt-0.5">•</span>
              <span><strong className="text-white">Peak Validation Accuracy (Epoch 39):</strong> 87.99%</span>
            </li>
          </ul>
          <p className="text-white/70 font-sans leading-relaxed">
            This evaluation confirms that the model achieves reliable performance
            in real-time gesture recognition tasks, supporting the overall system
            objectives.
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
                The precision of model weights was reduced to decrease file size,
                accelerate inference, and reduce memory footprint for web
                deployment, without significant loss in classification accuracy.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">
                  Lightweight Architecture:
                </strong>{" "}
                A compact neural network design was adopted, maintaining a minimal
                number of layers while preserving accuracy. This architecture is
                optimized for real-time applications and runs efficiently on
                standard hardware without requiring specialized GPUs.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Efficient Preprocessing:</strong>{" "}
                The hand landmark extraction process was streamlined to minimize
                the delay between gesture input and model prediction. Optimizations
                to the MediaPipe integration further enhance processing speed and
                responsiveness.
              </span>
            </li>
            <li className="flex items-start gap-2 text-white/70 font-sans leading-relaxed">
              <span className="text-white/40 mt-0.5">•</span>
              <span>
                <strong className="text-white">Batch Processing:</strong>{" "}
                Multiple frames are handled efficiently through batch processing
                techniques, ensuring consistent performance during continuous
                gesture recognition and enabling optimized handling of concurrent
                requests.
              </span>
            </li>
          </ul>
          <p className="text-white/70 font-sans leading-relaxed">
            Collectively, these optimizations allow the system to operate smoothly
            within web browsers, providing real-time gesture recognition accessible
            to a wide range of users without specialized hardware requirements.
          </p>
        </div>
      </div>
    </section>
  );
});

DatasetTraining.displayName = "DatasetTraining";
