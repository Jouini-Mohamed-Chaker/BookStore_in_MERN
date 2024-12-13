// src/utils/api.js

const API_URL = "http://localhost:5000";

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Add a new book
export const addBook = async (book) => {
  try {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error("Failed to add book");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

// Updating a book
export const updateBook = async (bookId, updatedBook) => {
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });

    if (!response.ok) {
      throw new Error("Failed to update book");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (bookId) => {
  const response = await fetch(`/api/books/${bookId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
  return await response.json();
};

// Add to favourites
export const addToFavourites = async (userId, bookId) => {
  try {
    const response = await fetch(`${API_URL}/users/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, bookId }),
    });
    if (!response.ok) {
      throw new Error("Failed to add to favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding to favourites:", error);
    throw error;
  }
};

// Fetch favourites for a specific user
export const fetchFavourites = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/favourites/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching favourites:", error);
    throw error;
  }
};
