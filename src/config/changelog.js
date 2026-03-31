// Changelog data configuration
// To add a new version, add a new object to the changelogs array
// Date format: [year, month, day] - month is 1-indexed (1 = January, 12 = December)

export const changelogs = [
  {
    version: "1.0.0 (Release Candidate)",
    codename: "Temporal Owl",
    date: [2026, 3, 30],
    intro:
      "Capstone II marks the transition from static image classification to real-time temporal sequence recognition. The system now supports fluid movement, voice synthesis, and edge-based data processing.",
    features: [
      "Integrated 30-frame Sequential LSTM model for dynamic sign recognition",
      "Full Text-to-Speech (TTS) implementation using Google Cloud Synthesis",
      "Real-time Sign Gesture Previewer for interactive user guidance",
      "Edge-based Landmark Streaming (sending 126 coordinates instead of raw video)",
      "Developed custom 57,000+ frame sequential dataset for movement training",
    ],
    fixes: [
      "Resolved 'Zero-Padding' issues for variable-length sign sequences",
      "Mitigated browser thermal throttling through optimized landmark extraction",
      "Fixed synchronization lag between AI inference and Speech output",
      "Corrected spatial scaling errors for varying user-to-camera distances",
    ],
    improvements: [
      "Shifted from single-frame snapshots to 30-frame temporal windows",
      "Improved privacy by eliminating raw image transmission to the backend",
      "Enhanced Khmer linguistic accuracy in TTS phonetic mapping",
      "Optimized backend Flask architecture for concurrent stateful requests",
      "Updated Documentation to include Sequential Data Directory structures",
    ],
  },
  {
    version: "0.1.0 (Beta)",
    codename: "Speedy Rabbit",
    date: [2025, 12, 1],
    intro:
      "Our website interface is complete, while the AI model is still being trained and integrated. Features listed below reflect UI and system progress.",
    features: [
      "Web interface for Khmer sign language translation completed",
      "Demo page design finalized",
      "User-friendly layout with accessible design",
      "Sections added: Home, About, Documentation, Contact, Changelog, and Demo",
      "Real-time UI preview layout prepared (model pending integration)",
      "Speech output interface designed (text-to-speech integration in progress)",
    ],
    fixes: [
      "Fixed layout issues on mobile devices",
      "Improved page loading performance",
      "Resolved navigation bugs between pages",
      "Corrected UI alignment and spacing issues",
      "Fixed broken links in Documentation and Contact sections",
    ],
    improvements: [
      "Enhanced design consistency across all pages",
      "Improved user experience with cleaner interface and smoother navigation",
      "Optimized assets for better performance",
      "Updated content clarity and documentation structure",
      "Prepared API structure for AI model connection (integration ongoing)",
    ],
  },
];
