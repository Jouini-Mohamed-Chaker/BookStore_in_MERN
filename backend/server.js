const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectToDatabase } = require("./config/database");
const { setBookCollection } = require("./controllers/bookController");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Health check route
app.get("/health", async (req, res) => {
  try {
    const { userCollections, bookCollections } = await connectToDatabase();

    // Check if books and users collections are available
    const booksAvailable = await bookCollections.findOne({});
    const usersAvailable = await userCollections.findOne({});

    if (booksAvailable && usersAvailable) {
      res.json({ status: "OK", message: "All services are working" });
    } else {
      res
        .status(500)
        .json({ status: "ERROR", message: "Collections not available" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "ERROR", message: "Database connection failed", error });
  }
});

// Start the server
(async () => {
  try {
    const { userCollections, bookCollections } = await connectToDatabase();

    // Ensure the collections are available before proceeding
    if (!userCollections || !bookCollections) {
      throw new Error("Failed to connect to required collections");
    }

    // Initialize collections for controllers
    setBookCollection(bookCollections);

    // Use routes
    app.use("/books", bookRoutes); // Book routes
    app.use("/users", userRoutes); // User routes

    // Start listening
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error initializing the server:", err);
    process.exit(1);
  }
})();
