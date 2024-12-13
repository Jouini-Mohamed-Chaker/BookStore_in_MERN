# Books

### 1. **POST /books**

- **Description**: Add a new book.
- **Request Body**: JSON object with book details.
- **Response**: `201 Created` with book ID or `500 Internal Server Error`.

### 2. **GET /books**

- **Description**: Get all books.
- **Response**: JSON array of books or `500 Internal Server Error`.

### 3. **PUT /books/:id**

- **Description**: Update a book by ID.
- **Request Body**: JSON object with fields to update.
- **Response**: `200 OK` or `500 Internal Server Error`.

### 4. **DELETE /books/:id**

- **Description**: Delete a book by ID.
- **Response**: `200 OK` or `500 Internal Server Error`.

---

# Users

### 1. **POST /users/signup**

- **Description**: Register a new user.
- **Request Body**: JSON object with `name`, `email`, `password`, and `role`.
- **Response**: `201 Created` with user ID or `400 Bad Request` if fields are missing.

### 2. **POST /users/login**

- **Description**: Login a user.
- **Request Body**: JSON object with `email` and `password`.
- **Response**: `200 OK` with login success message and token or `404 Not Found` if user doesn't exist.

### 3. **POST /users/favourites**

- **Description**: Add a book to user's favourites.
- **Request Body**: JSON object with `userId` and `bookId`.
- **Response**: `200 OK` or `400 Bad Request` if IDs are missing or book already in favourites.

### 4. **GET /users/:userId/favourites**

- **Description**: Get all favourite books of a user.
- **Response**: JSON array of favourite books or `404 Not Found` if user doesn't exist.
