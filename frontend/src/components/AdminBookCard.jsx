// src/components/AdminBookCard.jsx

import React from "react";

const AdminBookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src={book.imageURL}
        alt={book.bookTitle}
        className="w-32 h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{book.bookTitle}</h3>
      <p className="text-sm text-gray-500">{book.authorName}</p>
      <p className="text-sm text-gray-700 mt-2">{book.category}</p>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => onEdit(book)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminBookCard;
