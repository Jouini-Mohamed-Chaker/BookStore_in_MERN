import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare login credentials to send
    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        loginData
      );

      if (response.status === 200) {
        // Handle successful login
        const { role, userId } = response.data;
        setError("");

        // Save token and userId in localStorage for future use
        localStorage.setItem("userId", userId);

        // Redirect based on user role
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else if (role === "user") {
          navigate("/favourites");
        } else {
          setError("Unknown role detected. Please contact support.");
        }
      }
    } catch (error) {
      // Handle errors
      setError(
        error.response?.data?.message ||
          "Invalid login credentials. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
