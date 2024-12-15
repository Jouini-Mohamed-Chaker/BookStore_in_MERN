const { v4: uuidv4 } = require("uuid");
const { connectToDatabase } = require("../config/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET_KEY = process.env.SECRET_JWT_KEY;

/**
 * Handles user signup
 */
async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { userCollections } = await connectToDatabase(); // Ensure connection

    // Check if the user already exists
    const existingUser = await userCollections.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = {
      _id: uuidv4(),
      name,
      email,
      password: hashedPassword, // Store the hashed password
      role: "user",
      favouriteBooks: [],
    };

    // Insert the new user into the database
    const result = await userCollections.insertOne(newUser);

    res.status(201).json({
      message: "User created successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user", error });
  }
}

/**
 * Handles user login.
 */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const { userCollections } = await connectToDatabase();

    const user = await userCollections.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Failed to login", error });
  }
}

/**
 * Adds a book to the user's favourites.
 */
async function addFavourite(req, res) {
  try {
    const { userId, bookId } = req.body;

    if (!userId || !bookId) {
      return res
        .status(400)
        .json({ message: "User ID and Book ID are required" });
    }

    const { userCollections } = await connectToDatabase(); // Ensure connection

    const user = await userCollections.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.favouriteBooks.includes(bookId)) {
      return res.status(400).json({ message: "Book is already in favourites" });
    }

    await userCollections.updateOne(
      { _id: userId },
      { $push: { favouriteBooks: bookId } }
    );

    res.status(200).json({ message: "Book added to favourites" });
  } catch (error) {
    console.error("Error adding to favourites:", error);
    res.status(500).json({ message: "Failed to add to favourites", error });
  }
}

/**
 * Fetches a user's favourite books.
 */
async function getFavourites(req, res) {
  try {
    const { userId } = req.params;

    const { userCollections } = await connectToDatabase(); // Ensure connection

    const userWithBooks = await userCollections
      .aggregate([
        { $match: { _id: userId } },
        {
          $lookup: {
            from: "books",
            localField: "favouriteBooks",
            foreignField: "_id",
            as: "favouriteBooks",
          },
        },
      ])
      .toArray();

    res
      .status(200)
      .json({ favouriteBooks: userWithBooks[0]?.favouriteBooks || [] });
  } catch (error) {
    console.error("Error fetching favourites:", error);
    res.status(500).json({ message: "Failed to fetch favourites", error });
  }
}

module.exports = {
  signup,
  login,
  addFavourite,
  getFavourites,
};
