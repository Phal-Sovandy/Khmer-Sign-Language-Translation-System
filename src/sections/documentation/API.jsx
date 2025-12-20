import React from "react";
import { CodeBlock } from "../../components/ui";

/**
 * API Section Component
 */
export const API = React.memo(() => {
  return (
    <section id="api">
      <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-8">
        API Documentation
      </h1>

      <div className="prose prose-invert max-w-none space-y-8">
        <p className="text-white/70 font-sans leading-relaxed">
          The Khmer Sign Language Translation System provides a RESTful API for
          developers who want to integrate gesture recognition functionality
          into their own applications. The API accepts image data and returns
          predicted sign language gestures with confidence scores and hand
          landmark coordinates.
        </p>

        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 19.5zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <div>
              <h4 className="font-sans font-semibold text-blue-400 mb-1">
                Base URL
              </h4>
              <p className="text-white/70 text-sm font-sans">
                The API is available at:{" "}
                <code className="px-2 py-1 bg-white/10 rounded text-sm">
                  http://localhost:3000
                </code>{" "}
                (development) or your production server URL.
              </p>
            </div>
          </div>
        </div>

        {/* POST /predict_image */}
        <div>
          <h2 className="font-sans text-2xl font-semibold text-white mb-4">
            POST <code className="text-brand-primary">/predict_image</code>
          </h2>

          <p className="text-white/70 font-sans leading-relaxed mb-4">
            Predicts sign language gesture from an image containing hand
            landmarks. This is the main endpoint for gesture recognition.
          </p>

          <div className="space-y-6">
            {/* Request */}
            <div>
              <h3 className="font-sans text-xl font-semibold text-white mb-3">
                Request
              </h3>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl mb-4">
                <p className="text-white/60 text-sm font-sans mb-2">
                  <strong>Method:</strong> POST
                </p>
                <p className="text-white/60 text-sm font-sans mb-2">
                  <strong>Content-Type:</strong> application/json
                </p>
                <p className="text-white/60 text-sm font-sans">
                  <strong>Endpoint:</strong> /predict_image
                </p>
              </div>

              <h4 className="font-sans font-semibold text-white mb-2">
                Request Body
              </h4>
              <CodeBlock
                code={`{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
}`}
              />

              <p className="text-white/60 text-sm font-sans mt-3">
                The{" "}
                <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                  image
                </code>{" "}
                field should contain a base64-encoded image with data URI prefix
                (e.g.,{" "}
                <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                  data:image/jpeg;base64,
                </code>
                ).
              </p>
            </div>

            {/* Response */}
            <div>
              <h3 className="font-sans text-xl font-semibold text-white mb-3">
                Response
              </h3>

              <h4 className="font-sans font-semibold text-white mb-2">
                Success Response (200 OK)
              </h4>
              <div className="mb-4">
                <CodeBlock
                  code={`{
  "label": "សួស្តី",
  "confidence": 95.5,
  "landmarks": [
    {"x": 0.123, "y": 0.456},
    {"x": 0.234, "y": 0.567},
    ...
  ]
}`}
                />
              </div>

              <div className="space-y-2 mb-4">
                <h5 className="font-sans font-semibold text-white/90 text-sm">
                  Response Fields:
                </h5>
                <ul className="space-y-2 text-white/70 text-sm font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        label
                      </code>{" "}
                      (string): The predicted sign language gesture in Khmer
                      text
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        confidence
                      </code>{" "}
                      (float): Prediction confidence percentage (0-100)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        landmarks
                      </code>{" "}
                      (array): Normalized hand landmark coordinates (x, y) from
                      MediaPipe (21 landmarks per hand)
                    </span>
                  </li>
                </ul>
              </div>

              <h4 className="font-sans font-semibold text-white mb-2">
                Error Response
              </h4>
              <div className="mb-4">
                <CodeBlock
                  code={`{
  "error": "No gesture detected"
}`}
                />
              </div>

              <div className="space-y-2">
                <p className="text-white/60 text-sm font-sans">
                  Common error messages:
                </p>
                <ul className="space-y-1 text-white/70 text-sm font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        "No gesture detected"
                      </code>{" "}
                      - No hands were detected in the image
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        "Failed to decode image"
                      </code>{" "}
                      - Invalid image format or corrupted data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">•</span>
                    <span>
                      <code className="px-1.5 py-0.5 bg-white/10 rounded text-xs">
                        "&lt;error message&gt;"
                      </code>{" "}
                      - Other server errors (check error message for details)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Examples */}
            <div>
              <h3 className="font-sans text-xl font-semibold text-white mb-3">
                Code Examples
              </h3>

              <div className="space-y-4">
                {/* JavaScript Example */}
                <div>
                  <h4 className="font-sans font-semibold text-white mb-2">
                    JavaScript (Fetch API)
                  </h4>
                  <CodeBlock
                    code={`async function predictGesture(imageData) {
  const response = await fetch('http://localhost:3000/predict_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: imageData
    })
  });
  
  const result = await response.json();
  
  if (result.error) {
    console.error('Error:', result.error);
  } else {
    console.log('Predicted:', result.label);
    console.log('Confidence:', result.confidence + '%');
  }
  
  return result;
}`}
                  />
                </div>

                {/* Python Example */}
                <div>
                  <h4 className="font-sans font-semibold text-white mb-2">
                    Python (requests)
                  </h4>
                  <CodeBlock
                    code={`import requests
import base64

# Read and encode image
with open("hand_image.jpg", "rb") as f:
    image_data = base64.b64encode(f.read()).decode("utf-8")

# Send request
response = requests.post(
    "http://localhost:3000/predict_image",
    json={"image": f"data:image/jpeg;base64,{image_data}"}
)

result = response.json()

if "error" in result:
    print(f"Error: {result['error']}")
else:
    print(f"Predicted: {result['label']}")
    print(f"Confidence: {result['confidence']:.2f}%")`}
                  />
                </div>

                {/* cURL Example */}
                <div>
                  <h4 className="font-sans font-semibold text-white mb-2">
                    cURL
                  </h4>
                  <CodeBlock
                    code={`curl -X POST http://localhost:3000/predict_image \\
  -H "Content-Type: application/json" \\
  -d '{"image": "data:image/jpeg;base64,..."}'`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Limiting & Best Practices */}
        <div>
          <h2 className="font-sans text-2xl font-semibold text-white mb-4">
            Best Practices & Considerations
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-sans font-semibold text-white mb-2">
                Image Requirements
              </h3>
              <ul className="space-y-2 text-white/70 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Images should contain clearly visible hands with adequate
                    lighting
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Recommended image size: 640x480 or higher resolution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Supported formats: JPEG, PNG (converted to JPEG for
                    processing)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Base64 encoding should include the data URI prefix for
                    proper parsing
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-sans font-semibold text-white mb-2">
                Performance Tips
              </h3>
              <ul className="space-y-2 text-white/70 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    For real-time applications, limit request frequency to avoid
                    server overload
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Consider implementing client-side caching for repeated
                    gestures
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Use appropriate image compression to reduce payload size
                    while maintaining quality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/40 mt-0.5">•</span>
                  <span>
                    Handle errors gracefully and provide user feedback for
                    failed requests
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-sans font-semibold text-white mb-2">
                CORS Configuration
              </h3>
              <p className="text-white/70 text-sm font-sans mb-2">
                The API is configured to accept requests from common development
                origins. For production use, ensure your domain is added to the
                CORS allowed origins list in the backend configuration.
              </p>
              <p className="text-white/60 text-xs font-sans">
                Default allowed origins: localhost:5173, localhost:3000,
                localhost:5000, localhost:5500
              </p>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <div>
              <h4 className="font-sans font-semibold text-yellow-400 mb-1">
                Note
              </h4>
              <p className="text-white/70 text-sm font-sans">
                This API is part of a student project and is provided as-is. For
                production use, consider implementing additional features such
                as rate limiting, authentication, and error logging. The API
                endpoint may change in future updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

API.displayName = "API";
