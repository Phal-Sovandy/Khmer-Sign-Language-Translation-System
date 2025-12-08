# server_khmer.py
from flask import Flask, render_template, request, jsonify, send_from_directory
import cv2
import torch
import torch.nn as nn
import numpy as np
import mediapipe as mp
from pathlib import Path
import base64
from flask_cors import CORS
import os

# -------------------------
# Flask app + CORS
# -------------------------
app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": [
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:5000",
        "http://localhost:5000",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://localhost:3000",
    ]
}})

# -------------------------
# Config
# -------------------------
MODEL_PATH = Path("./model/model_epoch9_val0.8790.pth")
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# -------------------------
# LandmarkNet model (2-hand)
# -------------------------
class LandmarkNet(nn.Module):
    def __init__(self, num_classes):
        super().__init__()
        self.fc = nn.Sequential(
            nn.Linear(84, 128),  # 2 hands x 21 landmarks x 2 coords
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(64, num_classes)
        )

    def forward(self, x):
        return self.fc(x)

# -------------------------
# Load model
# -------------------------
checkpoint = torch.load(MODEL_PATH, map_location=DEVICE)
class_names = checkpoint["class_names"]
num_classes = len(class_names)

model = LandmarkNet(num_classes).to(DEVICE)
model.load_state_dict(checkpoint["model_state_dict"])
model.eval()
print("✅ Model loaded")

# -------------------------
# Mediapipe Hands
# -------------------------
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

hands_detector = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)
print("✅ Mediapipe initialized")

# -------------------------
# Prediction functions
# -------------------------
def extract_landmarks(hand):
    xs = np.array([lm.x for lm in hand.landmark])
    ys = np.array([lm.y for lm in hand.landmark])
    xs = (xs - xs.mean()) / (xs.std() + 1e-6)
    ys = (ys - ys.mean()) / (ys.std() + 1e-6)
    return np.concatenate([xs, ys]).astype(np.float32)

def get_two_hand_features(hands_list):
    hands_list = hands_list[:2]  # max 2 hands
    features = [extract_landmarks(h) for h in hands_list]
    while len(features) < 2:
        features.append(np.zeros(42, dtype=np.float32))
    return torch.tensor(np.concatenate(features)[None, :], dtype=torch.float32).to(DEVICE)

def predict(hands_list):
    x = get_two_hand_features(hands_list)
    with torch.no_grad():
        out = model(x)
        probs = torch.nn.functional.softmax(out, dim=1)[0]
        top_idx = torch.argmax(probs).item()
        return class_names[top_idx], probs[top_idx].item() * 100

# -------------------------
# Routes
# -------------------------
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict_image', methods=['POST'])
def predict_image():
    try:
        data = request.get_json()
        image_data = data['image'].split(",")[1]
        image_bytes = base64.b64decode(image_data)
        nparr = np.frombuffer(image_bytes, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if frame is None:
            return {"error": "Failed to decode image"}

        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands_detector.process(frame_rgb)

        if results.multi_hand_landmarks:
            hands_output = []

            # Extract landmarks for each hand
            for idx, hand_landmarks in enumerate(results.multi_hand_landmarks):
                landmarks = [{"x": lm.x, "y": lm.y} for lm in hand_landmarks.landmark]
                hand_label = "Left"
                if results.multi_handedness:
                    hand_label = results.multi_handedness[idx].classification[0].label
                hands_output.append({
                    "label": hand_label,   # Left / Right
                    "landmarks": landmarks
                })

            # Predict gesture using all detected hands together
            gesture_label, gesture_conf = predict(results.multi_hand_landmarks)

            return {
                "hands": hands_output,
                "class": gesture_label,
                "confidence": gesture_conf
            }

        else:
            return {"error": "No hand detected"}

    except Exception as e:
        return {"error": str(e)}




IMAGE_FOLDER = r"D:/Year 3/Capstone Project/Test_Sign/sample"  # note raw string r""

@app.route("/list_images")
def list_images():
    try:
        files = os.listdir(IMAGE_FOLDER)
    except FileNotFoundError:
        return jsonify([])

    # Only filenames, return URL paths
    images = [f"/images/{f}" for f in files
              if f.lower().endswith((".jpg", ".jpeg", ".png", ".gif"))]

    return jsonify(images)

@app.route("/images/<filename>")
def serve_image(filename):
    # Use safe join to avoid errors with spaces
    return send_from_directory(IMAGE_FOLDER, filename, as_attachment=False)


# -------------------------
# Run server
# -------------------------
if __name__ == "__main__":
    print("✅ Starting Flask server...")
    app.run(host='0.0.0.0', port=3000, debug=True)
