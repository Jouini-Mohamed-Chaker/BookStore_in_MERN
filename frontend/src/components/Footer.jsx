import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 <span className="text-white">Bookstore</span>. All rights
          reserved.
        </p>
        <p className="text-xs mt-1">
          Designed with <span className="text-red-500">♥</span> for book lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
