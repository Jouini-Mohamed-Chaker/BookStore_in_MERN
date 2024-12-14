import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../utils/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setFilteredBooks(data); // Initialize filteredBooks with all books
      } catch (err) {
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  // Filter books whenever the search query changes
  useEffect(() => {
    const filtered = books.filter((book) =>
      book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        Loading books...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for books..."
          className="border border-gray-300 rounded px-4 py-2 w-2/3 sm:w-1/3 focus:outline-none focus:ring focus:ring-blue-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <div className="text-center col-span-full text-gray-500">
            No books found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
