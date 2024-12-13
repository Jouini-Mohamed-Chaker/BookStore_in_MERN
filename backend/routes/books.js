const express = require("express");
const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

/**
 * Route: POST /books
 * Description: Add a new book
 */
router.post("/", addBook);

/**
 * Route: GET /books
 * Description: Get all books
 */
router.get("/", getBooks);

/**
 * Route: PUT /books/:id
 * Description: Update a book by ID
 */
router.put("/:id", updateBook);

/**
 * Route: DELETE /books/:id
 * Description: Delete a book by ID
 */
router.delete("/:id", deleteBook);

module.exports = router;
