from flask import Flask
from flask import request
from flask import jsonify
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo
from flask_cors import CORS
import joblib
import pandas as pd
app = Flask(__name__)
CORS(app)
model = joblib.load("model.pkl")

@app.route("/")
def home():
    return {
        "message": "SipPerfect AI Backend Running"
    }

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    tea_temp = data["tea_temp"]
    room_temp = data["room_temp"]
    fan_speed = data["fan_speed"]
    volume_ml = data["volume_ml"]
    cup_material = data["cup_material"]

    input_data = pd.DataFrame(
        [[tea_temp, room_temp, fan_speed, volume_ml, cup_material]],
        columns=["tea_temp","room_temp","fan_speed","volume_ml","cup_material"]
    )
    prediction = model.predict(input_data)[0]
    minutes = int(round(float(prediction), 2))
    ready_time = ( datetime.now(ZoneInfo("Asia/Kolkata")) + timedelta(minutes=minutes)).strftime("%I:%M %p")
    return jsonify({
        "drinkable_time": minutes,
        "ready_at": ready_time,
        "message": f"Your drink will be perfect in {minutes} minutes"
    })
if __name__ == "__main__":
    app.run(debug=True)