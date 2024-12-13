import React, { useState, useEffect } from "react";
import { fetchBooks, addBook, updateBook } from "../utils/api";
const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [newBook, setNewBook] = useState({
    bookTitle: "",
    authorName: "",
    category: "",
    bookDescription: "",
    bookPdfURL: "",
    imageURL: "",
  });

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks(); // Fetch all books
        setBooks(data); // Assuming the API returns an array of books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    loadBooks();
  }, []);

  const handleEditClick = (book) => {
    setEditingBook(book);
    setNewBook({
      ...book,
    });
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
    setNewBook({
      bookTitle: "",
      authorName: "",
      category: "",
      bookDescription: "",
      bookPdfURL: "",
      imageURL: "",
    });
  };

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await updateBook(newBook._id, newBook); // Update the book in the database
      const updatedBooks = books.map((book) =>
        book._id === newBook._id ? newBook : book
      );
      setBooks(updatedBooks);
      handleCancelEdit();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleAddNewBook = async () => {
    try {
      const addedBook = await addBook(newBook);
      setBooks([addedBook, ...books]); // Add the new book to the list
      setNewBook({
        bookTitle: "",
        authorName: "",
        category: "",
        bookDescription: "",
        bookPdfURL: "",
        imageURL: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <button
          onClick={handleAddNewBook}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add New Book
        </button>
      </div>
      {editingBook ? (
        <div className="border p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Edit Book Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Title</label>
            <input
              type="text"
              name="bookTitle"
              value={newBook.bookTitle}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={newBook.authorName}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={newBook.category}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">
              Book Description
            </label>
            <textarea
              name="bookDescription"
              value={newBook.bookDescription}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg h-32"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Book PDF URL</label>
            <input
              type="text"
              name="bookPdfURL"
              value={newBook.bookPdfURL}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={newBook.imageURL}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-center mb-6">All Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                onClick={() => handleEditClick(book)}
              >
                <h3 className="text-lg font-semibold mb-2">{book.bookTitle}</h3>
                <p className="text-sm mb-2">{book.authorName}</p>
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">{book.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
