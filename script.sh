#!/bin/bash

# Exit the script if any command fails
set -e

echo "Starting backend setup..."

# Navigate to the backend directory
cd backend

# Install dependencies and start the backend
echo "Running npm install in backend..."
npm install
echo "Starting the backend..."
npm run start &

# Go back to the root directory
cd ..

echo "Starting frontend setup..."

# Navigate to the frontend directory
cd frontend

# Install dependencies and start the frontend
echo "Running npm install in frontend..."
npm install
echo "Starting the frontend..."
npm run dev