import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error

eeg_df = pd.read_csv("/Users/aparnabhaskar/Desktop/EEG_Data.csv")  # Update with your file path
target_df = pd.read_csv("/Users/aparnabhaskar/Desktop/eegs.csv")  # Update with your file path
min_rows = min(len(eeg_df), len(target_df))
eeg_df = eeg_df[:min_rows]
target_df = target_df[:min_rows]

# Normalize input features
scaler = StandardScaler()
X = scaler.fit_transform(eeg_df)

# Target values
y = target_df[['Engagement', 'Frustration', 'Meditation', 'Excitement']]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Use Random Forest Regressor
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse:.6f}")

new_data = pd.read_csv("/Users/aparnabhaskar/Desktop/EEG_Data.csv")
new_data = scaler.transform(new_data.drop(columns=["COUNTER", "GYROX", "GYROY", "TIMESTAMP", "FUNC_ID", "FUNC_VALUE", "MARKER", "SYNC_SIGNAL"], errors='ignore'))
predictions = model.predict(new_data)
print("Predicted Emotional States (Engagement, Frustration, Meditation, Excitement):")
print(predictions)