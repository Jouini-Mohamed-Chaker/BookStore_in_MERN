const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("BookInventory");
    console.log("Database selected: BookInventory");

    // Return the collections directly
    const userCollections = db.collection("users");
    const bookCollections = db.collection("books");

    return { userCollections, bookCollections };
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

// Optional: Function to close the connection
async function closeDatabase() {
  try {
    await client.close();
    console.log("MongoDB connection closed");
  } catch (err) {
    console.error("Failed to close MongoDB connection", err);
  }
}

module.exports = { connectToDatabase, closeDatabase };
