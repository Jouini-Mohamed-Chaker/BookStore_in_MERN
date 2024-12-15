#!/bin/bash

# Exit the script if any command fails
set -e

# Function to stop the backend and frontend processes
cleanup() {
  echo "Cleaning up..."
  # Kill the background processes (backend and frontend)
  kill "$frontend_pid"
  kill "$backend_pid"
}

# Trap the EXIT signal to ensure cleanup is done when the script terminates
trap cleanup EXIT

echo "Starting backend setup..."

# Navigate to the backend directory
cd backend

# Install dependencies and start the backend
echo "Running npm install in backend..."
npm install
echo "Starting the backend..."
npm run start &
# Save the backend process ID
backend_pid=$!

# Go back to the root directory
cd ..

echo "Starting frontend setup..."

# Navigate to the frontend directory
cd frontend

# Install dependencies and start the frontend
echo "Running npm install in frontend..."
npm install
echo "Starting the frontend..."
npm run dev &
# Save the frontend process ID
frontend_pid=$!

# Wait for both processes to finish (this ensures the script waits for the processes to exit)
wait "$frontend_pid" "$backend_pid"
