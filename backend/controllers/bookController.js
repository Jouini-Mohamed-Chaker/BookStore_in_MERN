const { v4: uuidv4 } = require("uuid"); // Import UUID generator

let bookCollections;

/**
 * Sets the MongoDB book collection.
 * @param {Collection} collection - MongoDB collection instance.
 */
function setBookCollection(collection) {
  bookCollections = collection;
}

/**
 * Adds a new book to the collection.
 */
async function addBook(req, res) {
  try {
    const newBook = req.body;
    newBook._id = uuidv4(); // Generate a UUID for the book ID
    const result = await bookCollections.insertOne(newBook);
    res.status(201).json({ message: "Book added successfully", result });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Failed to add book", error });
  }
}
/**
 * Fetches all books from the collection.
 */
async function getBooks(req, res) {
  try {
    const books = await bookCollections.find({}).toArray();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to get books", error });
  }
}

/**
 * Updates a book by its ID.
 */
async function updateBook(req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;
    const result = await bookCollections.updateOne(
      { _id: id }, // Assuming the ID is a string (UUID)
      { $set: updates }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully", result });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Failed to update book", error });
  }
}

/**
 * Deletes a book by its ID.
 */
async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const result = await bookCollections.deleteOne({ _id: id }); // Assuming the ID is a string (UUID)

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully", result });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Failed to delete book", error });
  }
}

module.exports = {
  setBookCollection,
  addBook,
  getBooks,
  updateBook,
  deleteBook,
};
