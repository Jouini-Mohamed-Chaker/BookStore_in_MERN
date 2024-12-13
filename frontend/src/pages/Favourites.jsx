import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { fetchFavourites } from "../utils/api";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
        if (!userId) {
          throw new Error("User not logged in");
        }

        const data = await fetchFavourites(userId); // Fetch user's favourite books
        setFavourites(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to load favourites");
        setLoading(false);
      }
    };

    loadFavourites();
  }, []);

  if (loading)
    return <div className="text-center mt-10">Loading favourites...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Favourites</h1>
      {favourites.length === 0 ? (
        <div className="text-center mt-10 text-gray-500">
          No books added to favourites yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favourites.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
