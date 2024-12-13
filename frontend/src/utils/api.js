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
