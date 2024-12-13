import React, { useState, useEffect } from "react";
import BookForm from "../components/BookForm";
import AdminBookCard from "../components/AdminBookCard";

import { fetchBooks, deleteBook } from "../utils/api"; // Make sure you import deleteBook

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooksData = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };

    fetchBooksData();
  }, []);

  const handleAddBookClick = () => {
    setEditingBook(null); // Reset editingBook for adding new book
    setShowForm(true); // Show form for adding a book
  };

  const handleEditBookClick = (book) => {
    setEditingBook(book); // Set the book to be edited
    setShowForm(true); // Show form for editing the book
  };

  const handleDeleteBookClick = async (bookId) => {
    try {
      await deleteBook(bookId);
      // Remove the deleted book from the state to update the UI
      setBooks(books.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAddBookClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition mb-4"
      >
        Add New Book
      </button>

      {showForm && <BookForm book={editingBook} onClose={handleCloseForm} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <AdminBookCard
            key={book._id}
            book={book}
            onEdit={handleEditBookClick}
            onDelete={() => handleDeleteBookClick(book._id)} // Pass the book ID to delete
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
