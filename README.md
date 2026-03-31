# Khmer Sign Language Translation System (Phase II)

<div align="center">

Capstone II: Advanced Sequential Recognition System utilizing Long Short-Term Memory (LSTM) for high-accuracy Khmer Sign Language translation.

System Workflow • Tech Stack • Installation • Model Specifications • Performance
<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?logo=tensorflow&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-API-000000?logo=flask&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-4285F4)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?logo=tailwindcss&logoColor=white)

</div>

</div>

---

## Overview

Phase II (Codename: *Observant Hawk*) marks the transition from static gesture recognition to advanced sequential recognition. Developed as the Capstone II project, this system leverages temporal deep learning to interpret the fluid, motion-based nature of Khmer Sign Language (KSL).

By analyzing sequences of movement rather than isolated frames, the system provides a more natural and accurate communication bridge.

---

## Key Highlights

**Sequential Intelligence**  
Powered by an LSTM-based neural network that models motion over time using 30-frame sequences.

**Dual-Hand Tracking**  
Utilizes MediaPipe Hands to capture 126 coordinate features (x, y, z across 21 landmarks per hand).

**Privacy-First Inference**  
Only coordinate tensors are transmitted to the backend. Raw video data remains on the client device.

**95 Khmer Sign Classes**  
Supports a wide vocabulary including greetings, family-related terms, and common verbs.

**Voice Synthesis**  
Integrates Google Text-to-Speech (gTTS) for real-time Khmer audio output.

---

## System Workflow

The "Observant Hawk" architecture follows a sliding-window pipeline:

1. **Capture**  
   React frontend accesses the webcam and extracts 126 coordinates per frame using MediaPipe.

2. **Buffering**  
   Accumulates a temporal sequence of 30 frames.

3. **Normalization**  
   Applies zero-padding to maintain a consistent input shape of (30,126).

4. **Inference**  
   The NumPy array is sent via POST request to the Flask API, where the Keras (.h5) model performs prediction.

5. **Output**  
   Predicted Khmer text is returned and converted to speech via gTTS.

---

## Tech Stack

### AI & Machine Learning
- TensorFlow 2.x (Keras Sequential API)
- LSTM (Long Short-Term Memory)
- MediaPipe
- NumPy

### Backend (Python 3.10+)
- Flask
- gTTS (Google Text-to-Speech)
- TensorFlow Serving

### Frontend
- React.js
- Tailwind CSS
- Framer Motion

---

## Model Specifications

| Feature        | Detail |
|----------------|--------|
| Input Shape    | (30,126) — (Time Steps, Features) |
| Architecture   | 3 × LSTM Layers (64, 128, 64 units) |
| Regularization | Dropout (0.2) |
| Output Layer   | Dense with Softmax activation |
| Dataset Size   | 1,900 videos across 95 classes |
| Model Size     | ~4.1 MB |

---

## Performance

- Accuracy: 80.0% (sequential validation)
- Latency: ~1.4 seconds end-to-end
- Memory Usage: ~580 MB runtime
- Environment: MacBook Pro M3 Max, Ubuntu 24.04

---

## Installation

### Backend Setup

```bash
cd backend

python -m venv venv

# Activate environment
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

pip install -r requirements.txt
```

Place the model file:

```bash
/backend/model/model.h5
```

Run the server:

```bash
python server-v2-dynamic.py
```

Default port: 3000

---

### Frontend Setup

```bash
npm install
npm run dev
```

Default port: `5173`

---

## Advanced Features

**Sign Previewer**  
Interactive visual reference for all supported signs.

**Adaptive Normalization**  
Handles variations in signing speed.

**Coordinate Streaming**  
Efficient JSON-based transfer ensuring low bandwidth usage and privacy.

---

## Team - Capstone II

- Vann Vat — Team Leader & Data Engineer  
- Phal Sovandy — UI/UX Designer & Content Lead  
- Mony Meakputsoktheara — Machine Learning Engineer  
- Chhi Hangcheav — Backend Developer  
- Chim Panhaprasith — Frontend Developer  
- Toek Hengsreng — Dataset & Research Analyst  

---

<div align="center">

Developed at the Cambodia Academy of Digital Technology (CADT)  
Advancing accessibility through Computer Vision and Deep Learning

</div>
