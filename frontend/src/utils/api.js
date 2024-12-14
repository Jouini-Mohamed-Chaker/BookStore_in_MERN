const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL if different

// Books API
export const addBook = async (bookData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
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

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const updateBook = async (bookId, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
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

export const deleteBook = async (bookId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};

// Users API
export const signUpUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Failed to sign up user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Failed to log in user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const addToFavourites = async (favouriteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favouriteData),
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

export const fetchFavourites = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/favourites`);
    if (!response.ok) {
      throw new Error("Failed to fetch user favourites");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user favourites:", error);
    throw error;
  }
};
