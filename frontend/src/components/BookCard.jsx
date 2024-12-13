// src/components/BookCard.jsx

import React from "react";
import { addToFavourites } from "../utils/api"; // Ensure the correct import

const BookCard = ({ book, userId }) => {
  const handleAddToFavourites = async () => {
    try {
      const response = await addToFavourites(userId, book._id);
      console.log("Added to favourites:", response);
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };

  return (
    <div className="card">
      <h2>{book.bookTitle}</h2>
      <p>{book.authorName}</p>
      {/* Add your other book details here */}
      <button
        onClick={handleAddToFavourites}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Favourites
      </button>
    </div>
  );
};

export default BookCard;
