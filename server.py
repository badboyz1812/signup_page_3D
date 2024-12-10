from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)

# Database configuration
DB_CONFIG = {
    "server": r"PRADEEP\SQLEXPRESS",  # Replace with your server name
    "database": "Login_authentication",  # Replace with your database name
    "driver": "SQL SERVER",
}

# Connect to SQL Server
def get_db_connection():
    conn = pyodbc.connect(
        f"DRIVER={DB_CONFIG['driver']};"
        f"SERVER={DB_CONFIG['server']};"
        f"DATABASE={DB_CONFIG['database']};"
        f"Trusted_Connection=yes;"
    )
    return conn

# Route: Sign-up
@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not (username and email and password):
        return jsonify({"error": "All fields are required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)",
            (username, email, password),  # Store hashed password in production!
        )
        conn.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except pyodbc.IntegrityError:
        return jsonify({"error": "Email already exists"}), 400
    finally:
        conn.close()

# Route: Sign-in
@app.route("/signin", methods=["POST"])
def signin():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not (username and password):
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM Users WHERE Username = ? AND Password = ?",
            (username, password),
        )
        user = cursor.fetchone()
        if user:
            return jsonify({"message": "Sign-in successful!"}), 200
        else:
            return jsonify({"error": "Invalid username or password"}), 401
    finally:
        conn.close()

# Start the server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
