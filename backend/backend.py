from flask import Flask, request,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/get-output": {"origins": "http://localhost:3000"}})
from model.model import predict
@app.route("/get-output" ,methods=["POST"])
def get_output():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file'}), 400

    image = request.files['image']
    # You can save the file or process it here
    image.save(f"./uploads/{image.filename}")
    prediction = predict(image)
    return jsonify({'prediction': prediction})

if __name__ == "__main__":
    app.run(debug=True)