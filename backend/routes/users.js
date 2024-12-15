const express = require("express");
const {
  signup,
  login,
  addFavourite,
  getFavourites,
} = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

/**
 * Route: POST /users/signup
 * Description: User signup
 */
router.post("/signup", signup);

/**
 * Route: POST /users/login
 * Description: User login
 */
router.post("/login", login);

/**
 * Route: POST /users/favourites
 * Description: Add a book to user's favourites
 */
router.post("/favourites", authenticateToken, addFavourite);

/**
 * Route: GET /users/favourites/:userId
 * Description: Get all favourite books for a user
 */
router.get("/favourites/:userId", authenticateToken, getFavourites);

module.exports = router;
