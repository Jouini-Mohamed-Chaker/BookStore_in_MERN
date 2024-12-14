import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          <Link to="/" className="hover:text-gray-300 transition">
            Bookstore
          </Link>
        </h1>
        <div className="flex gap-6">
          <Link
            to="/signup"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
