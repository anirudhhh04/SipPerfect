import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib
df = pd.read_csv("../DataSet/tea_cooling_dataset_rows.csv")

X = df[["tea_temp","room_temp","fan_speed","volume_ml","cup_material" ]]
y = df["drinkable_time_min"]
model = LinearRegression()

model.fit(X, y)

joblib.dump(model, "model.pkl")
print("Model trained successfully..")