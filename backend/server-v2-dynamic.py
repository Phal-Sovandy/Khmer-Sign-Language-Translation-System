import os
import sys
import time
import logging
from datetime import datetime
from collections import deque

# Must be the first line to handle the Keras/TensorFlow split
os.environ["TF_USE_LEGACY_KERAS"] = "1"

import tensorflow as tf
import tf_keras as keras
from tf_keras.models import Sequential
from tf_keras.layers import LSTM, Dense, Dropout, Input, BatchNormalization
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS

# --- LOGGER CONFIGURATION ---
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("sign_language.log"), # Saves to a file
        logging.StreamHandler(sys.stdout)          # Also prints to terminal
    ]
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

class SignPredictor:
    def __init__(self):
        # Update with your full 75 classes
        self.actions = np.array(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "លេខ",
            "កូន", "ក្មួយប្រុស", "ក្មួយស្រី", "គ្រួសារ", "ជីដូនមួយ", "តា",
            "ទារក", "បងប្អូន", "បងស្រី", "បុរស", "ប្តី", "ប្រពន្ធ", "ពូ",
            "មីង", "ម្តាយ", "យាយ", "ស្រី", "ឪពុក", "ឪពុកម្តាយ", "កន្លែងណា",
            "ខឹង", "ខ្មាសអៀន", "ខ្លាច", "គិត", "ងងុយគេង", "ចាប់អារម្មណ៍",
            "ច្រណែន", "ឆ្ងាញ់", "ទុក្ខព្រួយ", "ធុញទ្រាន់", "នឹក", "បារម្មណ៍",
            "ពិបាក", "ភ្ញាក់ផ្អើល", "មិនយល់", "មិនអីទេ", "មោទកភាព", "យល់",
            "រន្ធត់", "សប្បាយ", "ស្រឡាញ់", "អបអរសាទរ", "អស់កម្លាំង", "អាណិត",
            "តើអ្នកកំពុងធ្វើអ្វី", "តើអ្នកមានអាយុប៉ុន្មាន","ត្រឹមត្រូវ", "ប៉ុន្មាន",
            "មិនត្រឹមត្រូវ", "សុខសប្បាយជាទេ", "សុំធ្វើម្តងទៀត", "ហេតុអ្វី", "អ្នកណា",
            "ថ្ងែត្រង់", "ថ្ងៃនេះ", "ម៉ោង", "អនាគត","ម្សិលមិញ", "ស្អែក","បង្គន់", "លុយ",
            "ផឹកទឹក", "ចងចាំ", "រងចាំ", "សម្រាលកូន", "សុំទោស", "អរគុណ",
            "មនុស្សថ្លង់", "មនុស្សស្តាប់លឺ", "មានផ្ទៃពោះ", "ស្អាត", "ឯកការ"]) 
        self.sequence_buffer = deque(maxlen=30)
        self.last_prediction = None
        self.model = self._load_model()
        logger.info("SignPredictor Initialized Successfully.")

    def _load_model(self):
        try:
            model = Sequential([
                Input(shape=(30, 126)),
                LSTM(128, return_sequences=True),
                Dropout(0.3),
                LSTM(128, return_sequences=False),
                Dropout(0.3),
                Dense(256, activation='relu'),
                BatchNormalization(),
                Dropout(0.2),
                Dense(128, activation='relu'),
                Dense(75, activation='softmax')
            ])
            
            base_dir = os.path.dirname(os.path.abspath(__file__))
            model_path = os.path.join(base_dir, 'model', 'ksl_model_v1_legacy.h5')
            
            model.load_weights(model_path)
            logger.info(f"Model weights loaded from {model_path}")
            return model
        except Exception as e:
            logger.error(f"Failed to load model: {e}")
            raise

    def predict(self, landmarks_json):
        all_lms = np.zeros(126)
        
        if landmarks_json and len(landmarks_json) > 0:
            for i, hand in enumerate(landmarks_json):
                if i >= 2: break
                coords = np.array([[lm['x'], lm['y'], lm['z']] for lm in hand])
                wrist = coords[0]
                coords = coords - wrist
                all_lms[i*63 : (i+1)*63] = coords.flatten()
        else:
            # Optional: Log if hands were expected but missing
            pass

        self.sequence_buffer.append(all_lms)

        if len(self.sequence_buffer) == 30:
            input_data = np.expand_dims(list(self.sequence_buffer), axis=0)
            res = self.model.predict(input_data, verbose=0)[0]
            
            idx = np.argmax(res)
            confidence = float(res[idx])
            
            if confidence > 0.7:
                label = self.actions[idx] if idx < len(self.actions) else f"ID_{idx}"
                
                # Only log to console if the predicted word changes
                if label != self.last_prediction:
                    logger.info(f"✨ NEW DETECTION: '{label}' (Conf: {confidence:.2f})")
                    self.last_prediction = label
                
                return label, confidence
                
        return None, 0.0

predictor = SignPredictor()

@app.route('/predict_landmarks', methods=['POST'])
def predict_route():
    start_time = time.time() # Track latency
    
    try:
        data = request.json
        landmarks = data.get('landmarks', [])
        
        label, confidence = predictor.predict(landmarks)
        
        # Log slow requests (Latency Monitoring)
        duration = time.time() - start_time
        if duration > 0.1: # If processing takes more than 100ms
            logger.warning(f"Slow prediction: {duration:.3f}s")
            
        return jsonify({"label": label, "confidence": confidence})

    except Exception as e:
        logger.error(f"API Error: {e}", exc_info=True)
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    logger.info("Starting Flask Server on port 3000...")
    app.run(port=3000, debug=False, threaded=True)