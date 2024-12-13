import React, { useState, useEffect } from "react";
import { addBook, updateBook } from "../utils/api";

const BookForm = ({ book, onClose }) => {
  const [bookTitle, setBookTitle] = useState(book?.bookTitle || "");
  const [authorName, setAuthorName] = useState(book?.authorName || "");
  const [category, setCategory] = useState(book?.category || "");
  const [bookDescription, setBookDescription] = useState(
    book?.bookDescription || ""
  );
  const [bookPdfURL, setBookPdfURL] = useState(book?.bookPdfURL || "");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Submit handler for adding or updating a book
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const updatedBook = {
      bookTitle,
      authorName,
      category,
      bookDescription,
      bookPdfURL,
    };

    try {
      let updatedBookData;
      if (book?._id) {
        updatedBookData = await updateBook(book._id, updatedBook);
      } else {
        updatedBookData = await addBook(updatedBook);
      }

      setSuccessMessage("Book updated successfully!");
      setErrorMessage(""); // Reset error message on success

      console.log("Updated Book Data:", updatedBookData);
    } catch (error) {
      setErrorMessage("Failed to update book. Please try again.");
      setSuccessMessage(""); // Reset success message on error
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {book ? "Edit Book" : "Add Book"}
      </h2>

      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label htmlFor="bookTitle" className="block text-gray-700">
            Book Title:
          </label>
          <input
            type="text"
            id="bookTitle"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorName" className="block text-gray-700">
            Author Name:
          </label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">
            Category:
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bookDescription" className="block text-gray-700">
            Description:
          </label>
          <textarea
            id="bookDescription"
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bookPdfURL" className="block text-gray-700">
            PDF URL:
          </label>
          <input
            type="text"
            id="bookPdfURL"
            value={bookPdfURL}
            onChange={(e) => setBookPdfURL(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Success and Error Messages */}
        {successMessage && (
          <p className="text-green-500 text-sm mt-2">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            {book ? "Update Book" : "Add Book"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
