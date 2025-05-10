from flask import Flask, request, jsonify, render_template
from ultralytics import YOLO
import cv2
import numpy as np
from io import BytesIO
import torch
#import torch_directml

app = Flask(__name__)

device = torch.device('cpu')

# Load the YOLOv8 model with PyTorch weights
model = YOLO('best.pt', task='detect').to(device)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/try-now')
def try_now():
    return render_template('try_now.html')

@app.route('/health-benefits')
def health_benefits():
    return render_template('health_benefits.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/use-and-recipes')
def use_and_recipes():
    return render_template('use_and_recipes.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image = request.files['image']
    if image.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    try:
        print("Loading image...")
        file_bytes = np.frombuffer(image.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
        print("Image loaded, resizing...")

        # Preserve aspect ratio while resizing
        h, w = img.shape[:2]
        target_size = 224
        scale = min(target_size / w, target_size / h)
        new_w, new_h = int(w * scale), int(h * scale)
        img_resized = cv2.resize(img, (new_w, new_h))

        # Create a square image by padding with black borders
        img_square = np.zeros((target_size, target_size, 3), dtype=np.uint8)
        x_offset = (target_size - new_w) // 2
        y_offset = (target_size - new_h) // 2
        img_square[y_offset:y_offset + new_h, x_offset:x_offset + new_w] = img_resized
        img = img_square

        print("Image resized, running inference...")
        results = model.predict(img, conf=0.4, max_det=1, device=device)
        print("Inference complete, processing results...")

        # Log all detections for debugging
        if len(results[0].boxes) == 0:
            print("No detections above confidence threshold. Checking all detections with lower threshold...")
            # Lower the threshold for debugging
            results_lower = model.predict(img, conf=0.1, max_det=1, device=device)
            for box in results_lower[0].boxes:
                print(f"Debug Detection: Class={results_lower[0].names[int(box.cls)]}, Confidence={box.conf.item():.2f}, Box={box.xyxy[0]}")
            return jsonify({'error': 'No pineapple detected in the image'}), 404

        box = results[0].boxes[0]
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        maturity_label = results[0].names[int(box.cls)]
        maturity = maturity_label.lower()

        print(f"YOLOv8 predicted maturity: {maturity}, Confidence: {box.conf.item():.2f}")
        return jsonify({'maturity': maturity})

    except Exception as e:
        print(f"Error during prediction: {str(e)}")
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)