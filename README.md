# Bangalore House Price Prediction

This project demonstrates how to build a real estate price prediction system from scratch. It includes a machine learning model, a Python Flask server, and a front-end website. The system predicts property prices based on user input, such as square footage, number of bedrooms, etc.

## Features

1. **End-to-End Workflow**:
   - Train a price prediction model using the **Bangalore home prices dataset**.
   - Develop a Python Flask backend to serve predictions.
   - Create a user-friendly front-end using HTML, CSS, and JavaScript.

2. **Data Science Concepts**:
   - Data cleaning and preprocessing.
   - Outlier detection and removal.
   - Feature engineering and dimensionality reduction.
   - Hyperparameter tuning using GridSearchCV.
   - Cross-validation for model evaluation.

3. **Tools and Technologies**:
   - **Python**: Core programming language.
   - **NumPy** and **Pandas**: Data cleaning and manipulation.
   - **Matplotlib**: Data visualization.
   - **Sklearn**: Model building and evaluation.
   - **Flask**: Backend development.
   - **HTML/CSS/JavaScript**: Front-end development.

---

## Project Structure

```plaintext
RealEstatePricePrediction/
│
├── client/                   # Frontend files
│   ├── app.html              # Main HTML file
│   ├── style.css             # Styling
│   ├── app.js                # JavaScript for API calls
│
├── server/                   # Backend files
│   ├── server.py             # Flask API
│   ├── model/                # Saved machine learning model
│   └── requirements.txt      # Python dependencies
│
├── notebooks/                # Jupyter notebooks for exploration and model building
│   └── model_building.ipynb  # ML workflow
│
└── data/                     # Dataset
    └── bangalore_home_prices.csv

```

## Installation and Setup

### Prerequisites

Ensure the following are installed on your system:
- Python 3.7+
- pip
- A code editor (e.g., VS Code or PyCharm)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/real-estate-price-prediction.git
   cd real-estate-price-prediction
2. **Set Up the Backend**:
-  Navigate to the server/ directory:
``` bash
    cd server
```
- Install dependencies:
``` bash
    pip install -r requirements.txt
```
- Start the Flask server:
``` bash
    python server.py
```

- The server will run at http://127.0.0.1:5000.

3. **Run the Frontend**:
- Open client/app.html in a browser.
- The website will connect to the Flask server for predictions.

### Usage

1. Open the website.   
2. Enter details such as:
    - Square footage of the house.
    - Number of bedrooms.
    - Location (drop-down menu).
3. Click "Predict Price".
4. The predicted price will appear on the screen.

### Deployment

## Deploy to AWS EC2

1. Launch an EC2 instance and configure security groups to allow HTTP and SSH traffic.
2. Install Python, Flask, and necessary libraries on the EC2 instance.
3. Copy project files to the EC2 instance using SCP or Git.
4. Install and configure Nginx to route traffic to the Flask backend.
5. Start the Flask server and ensure the website is accessible via the EC2 public URL.

###  Dataset

- Source: Kaggle Bangalore Home Prices Dataset
- The dataset includes features like location, square footage, number of bedrooms, and price.

### Key Concepts Covered
1. Data cleaning and preprocessing.
2. Outlier detection and removal.
3. Feature engineering and one-hot encoding.
4. Building a regression model using Linear Regression.
5. Hyperparameter tuning using GridSearchCV.
6. Cross-validation for model evaluation.

### Future Enhancements

1. Add support for additional cities.
2. Integrate advanced models like Random Forest or Gradient Boosting.
3. Deploy using Docker for easier scalability.



