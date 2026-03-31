import React from "react";
import DatasetCollage from "../../components/visuals/DatasetCollage";

/**
 * Dataset & Training Section Component - Capstone II (Dual-Hand LSTM)
 */
export const DatasetTraining = React.memo(() => {
  return (
    <section id="dataset-training">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        Sequential Dataset & LSTM Training
      </h1>

      <p className="text-white/70 font-sans leading-relaxed mb-8">
        Capstone II transitions from static hand-shape classification to **Temporal Gesture Recognition**. 
        By analyzing the movement of both hands over a fixed time window, the system can distinguish 
        between signs that share similar hand shapes but different motion paths.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Sequential Dataset Statistics
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                1,900
              </span>
              <span className="text-white/60 text-sm font-sans">
                Video Samples
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                95
              </span>
              <span className="text-white/60 text-sm font-sans">
                Dynamic Classes
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="block text-3xl font-bold text-white font-heading">
                126
              </span>
              <span className="text-white/60 text-sm font-sans">
                Features / Frame
              </span>
            </div>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Metric</th>
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Value</th>
                  <th className="text-left py-3 px-4 text-white/70 font-sans text-sm font-semibold">Technical Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Total Video Samples</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">1,900</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Recorded dynamic sign sequences</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Sequence Length</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">30 Frames</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">Standardized temporal window</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Tracking Method</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">Dual Hand Landmarks</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">21 points per hand (MediaPipe Hands)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70 font-sans text-sm">Total Feature Vector</td>
                  <td className="py-3 px-4 text-white font-sans text-sm">126</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-sm">(21 pts × 3 axes) × 2 hands</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-sans text-xl font-semibold text-white mb-4 mt-6">
            Hand Landmark Preprocessing
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            For each of the 95 gesture classes, we extract specialized hand coordinates. By focusing 
            exclusively on the hands, we reduce background noise and minimize the computational 
            overhead for mobile and web users.
          </p>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            The data consists of 1,900 sequences where each sequence contains 30 frames of 
            coordinate data. To ensure consistency, frames with no detected hands are 
            padded with zeros, ensuring the LSTM receives a consistent input shape of (30, 126).
          </p>
          <DatasetCollage />
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Model Architecture
          </h2>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-4">
            <h4 className="font-sans font-semibold text-white mb-3">
              Sequential Specifications:
            </h4>
            <ul className="space-y-2 text-white/70 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Input Layer:</strong> (30, 126) Sequential Tensor
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Processing Layers:</strong> 3-Stacked LSTM Layers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Model Size:</strong> ~4.1 MB
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  <strong className="text-white">Target Accuracy:</strong> 80.0%
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-sans text-xl font-semibold text-white mb-4">
            Optimization for Web
          </h2>
          <p className="text-white/70 font-sans leading-relaxed mb-4">
            By limiting extraction to <b>only hand landmarks</b>, the frontend processing speed 
            is significantly increased compared to full-body tracking. This allow the system 
            to maintain a steady 30 FPS, which is critical for accurate LSTM temporal analysis.
          </p>
        </div>
      </div>
    </section>
  );
});

DatasetTraining.displayName = "DatasetTraining";