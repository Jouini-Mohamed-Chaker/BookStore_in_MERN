import React from "react";
import { addToFavourites } from "../utils/api";

const BookCard = ({ book }) => {
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL,
  } = book;

  const handleAddToFavourites = async () => {
    try {
      await addToFavourites(book._id); // Send book ID to backend
      alert("Book added to favourites!");
    } catch (error) {
      console.error("Error adding to favourites:", error);
      alert("Failed to add to favourites");
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={imageURL}
        alt={bookTitle}
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{bookTitle}</h3>
      <p className="text-gray-600 text-sm">By {authorName}</p>
      <p className="text-gray-500 text-sm">Category: {category}</p>
      <p className="text-gray-700 text-sm mt-2">{bookDescription}</p>
      <a
        href={bookPdfURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        View PDF
      </a>
      <button
        onClick={handleAddToFavourites}
        className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
      >
        Add to Favourites
      </button>
    </div>
  );
};

export default BookCard;
