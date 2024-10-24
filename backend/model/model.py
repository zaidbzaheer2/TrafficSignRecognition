from keras.models import load_model
from PIL import Image
import numpy as np
import cv2
model = load_model("model/TrafficRecognitionModel.keras")

classes = { 0:'Speed limit (20km/h)',
            1:'Speed limit (30km/h)',
            2:'Speed limit (50km/h)',
            3:'Speed limit (60km/h)',
            4:'Speed limit (70km/h)',
            5:'Speed limit (80km/h)',
            6:'End of speed limit (80km/h)',
            7:'Speed limit (100km/h)',
            8:'Speed limit (120km/h)',
            9:'No passing',
            10:'No passing veh over 3.5 tons',
            11:'Right-of-way at intersection',
            12:'Priority road',
            13:'Yield',
            14:'Stop',
            15:'No vehicles',
            16:'Vehicle > 3.5 tons prohibited',
            17:'No entry',
            18:'General caution',
            19:'Dangerous curve left',
            20:'Dangerous curve right',
            21:'Double curve',
            22:'Bumpy road',
            23:'Slippery road',
            24:'Road narrows on the right',
            25:'Road work',
            26:'Traffic signals',
            27:'Pedestrians',
            28:'Children crossing',
            29:'Bicycles crossing',
            30:'Beware of ice/snow',
            31:'Wild animals crossing',
            32:'End speed + passing limits',
            33:'Turn right ahead',
            34:'Turn left ahead',
            35:'Ahead only',
            36:'Go straight or right',
            37:'Go straight or left',
            38:'Keep right',
            39:'Keep left',
            40:'Roundabout mandatory',
            41:'End of no passing',
            42:'End no passing vehicle > 3.5 tons' }
def predict(image):
    image = Image.open(image).convert('RGB')

    # Resize the image to the required size (30x30 in this case)
    resized_image = image.resize((30, 30))

    # Convert the image to a NumPy array and scale pixel values to [0, 1]
    image_array = np.array(resized_image) / 255.0

    # Expand dimensions to match the input shape of the model (1, 30, 30, 3)
    image_array = np.expand_dims(image_array, axis=0)

    # Make prediction using the model
    prediction = model.predict(image_array)

    # Return the index of the class with the highest prediction score
    return classes[np.argmax(prediction)]