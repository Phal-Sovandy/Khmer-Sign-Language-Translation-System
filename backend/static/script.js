import { ActionPredictor } from './ActionPredictor.js';

const video = document.getElementById('video');
const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');
const toggleBtn = document.getElementById('toggleBtn');
const labelImg = document.getElementById('label_image');

let stream = null;
let running = false;
const offscreenCanvas = document.createElement('canvas');
const offscreenCtx = offscreenCanvas.getContext('2d');

let predictor = null;

async function init() {
    predictor = new ActionPredictor('/static/converts.json');
    await predictor.load();        // <-- wait for fetch
    console.log("Loaded:", predictor.converts); 
}

init();

async function startCamera() {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    video.onloadedmetadata = () => {
        video.play();
        overlay.width = video.videoWidth;
        overlay.height = video.videoHeight;
        offscreenCanvas.width = video.videoWidth;
        offscreenCanvas.height = video.videoHeight;
    };
}

function stopCamera() {
    if (stream) stream.getTracks().forEach(t => t.stop());
    stream = null;
}

toggleBtn.onclick = async () => {
    running = !running;
    toggleBtn.innerText = running ? "CLOSE" : "OPEN";
    if (running) { await startCamera(); loop(); }
    else { stopCamera(); ctx.clearRect(0,0,overlay.width, overlay.height); labelImg.style.display='none'; }
};

async function loop() {
    if (!running) return;
    await captureAndPredict();
    requestAnimationFrame(loop);
}

let frameHistory = [];          // store last 10 frame labels
let finalPrediction = "";       // text result

const MAX_FRAMES = 10;
let frames = [];
const MAX_ACTIONS = 2;
let actions = []

async function captureAndPredict() {
    if (!video || video.videoWidth === 0) return;

    // Draw frame
    offscreenCtx.drawImage(video, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
    const imageData = offscreenCanvas.toDataURL('image/jpeg', 0.7);

    try {
        const response = await fetch('/predict_image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageData })
        });

        const result = await response.json();
        ctx.clearRect(0, 0, overlay.width, overlay.height);

        // ----- 1. store predicted frame (gesture class) -----
        if (!result.error) {
            frames.push(result.class);
            if (frames.length > MAX_FRAMES) frames.shift();
        }

       if(frames.length === MAX_FRAMES) {
            const pred = predictor.predict(frames);
            if (pred) {
                if (pred != actions[actions.length - 1]) {
                    actions.push(pred);
                    if (actions.length > MAX_ACTIONS) actions.shift();
                    const text = predictor.actionSetToText(actions);
                    if (text) finalPrediction = text; else finalPrediction = result.class;
                }
                
            }
       }

        // ---------- draw hands ----------
        if (!result.error && result.hands && result.hands.length > 0) {
            result.hands.forEach((hand, idx) => {
                ctx.fillStyle = idx === 0 ? "blue" : "cyan";
                ctx.strokeStyle = idx === 0 ? "green" : "lime";
                ctx.lineWidth = 2;

                hand.landmarks.forEach((lm) => {
                    const x = lm.x * overlay.width;
                    const y = lm.y * overlay.height;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, Math.PI * 2);
                    ctx.fill();
                });
            });

            // show label
            ctx.font = "20px Arial";
            ctx.fillStyle = "orange";
            ctx.fillText(`${result.class}`, 20, 40);

            // show final sentence
            if (finalPrediction) {
                ctx.fillStyle = "yellow";
                ctx.fillText(`Sentence: ${finalPrediction}${result.confidence}`, 20, 80);
            }

        } else {
            ctx.font = "20px Arial";
            ctx.fillStyle = "gray";
            ctx.fillText("No hands detected", 20, 40);
        }

    } catch (err) {
        console.error("Prediction error:", err);
    }
}

async function loadImages() {
    const response = await fetch("/list_images");
    const images = await response.json();

    const container = document.getElementById("image_container");
    images.forEach(path => {
        // Create a wrapper for image + text
        const wrapper = document.createElement("div");
        wrapper.style.display = "inline-block";
        wrapper.style.textAlign = "center";
        wrapper.style.margin = "10px";

        // Create image element
        const img = document.createElement("img");
        img.src = path;
        img.style.width = "200px";
        wrapper.appendChild(img);

        // Extract file name without extension
        const fileName = path.split("/").pop().split(".")[0];

        // Create text element
        const text = document.createElement("div");
        text.innerText = fileName;
        text.style.fontSize = "16px";
        text.style.marginTop = "5px";
        wrapper.appendChild(text);

        // Add to container
        container.appendChild(wrapper);
    });
}

loadImages();

