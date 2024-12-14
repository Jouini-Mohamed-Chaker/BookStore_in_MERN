import React from "react";
import { addToFavourites } from "../utils/api";

const BookCard = ({ book, userId }) => {
  // Handle adding a book to the favourites
  const handleAddToFavourites = async () => {
    try {
      const response = await addToFavourites(userId, book._id);
      console.log("Added to favourites:", response);
      alert(`Added "${book.bookTitle}" to favourites!`);
    } catch (error) {
      console.error("Error adding to favourites:", error);
      alert("Failed to add to favourites. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Book Image */}
      <img
        src={book.imageURL || "https://via.placeholder.com/150"}
        alt={book.bookTitle}
        className="w-full h-48 object-cover"
      />

      {/* Book Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 truncate">
          {book.bookTitle}
        </h2>
        <p className="text-gray-600 mb-3 truncate">By {book.authorName}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
          {book.bookDescription || "No description available."}
        </p>

        {/* Buttons */}
        <div className="flex justify-between">
          <a
            href={book.bookPdfURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read PDF
          </a>
          <button
            onClick={handleAddToFavourites}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
