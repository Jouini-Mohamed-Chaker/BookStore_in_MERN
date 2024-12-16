Here's an improved version of your README:

---

# How to Run the Project

Follow these steps to set up and run the project:

### 1. Create a `.env` File in the Backend Directory

Create a `.env` file in the backend directory with the following content:

```bash
PORT=5000
MONGODB_URI="<your_mongodb_uri>"
SECRET_JWT_KEY="<your_secret_jwt_token>"
```

Ensure that you replace `<your_mongodb_uri>` and `<your_secret_jwt_token>` with your actual MongoDB URI and JWT secret token.

### 2. Make the Script Executable

Give the script execution permissions by running:

```bash
chmod +x script.sh
```

### 3. Execute the Script

Run the script to start the backend and frontend:

```bash
./script.sh
```

### 4. Open the Frontend in Your Browser

Once the script is executed, you will see output similar to this:

```bash
  VITE v6.0.3  ready in 319 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Connected to MongoDB!
Database selected: BookInventory
Server is running on http://localhost:5000
```

The backend is running on port `5000`, and the frontend is running on port `5173`.

**Important:** Access the frontend at [http://localhost:5173](http://localhost:5173), not the backend URL.
