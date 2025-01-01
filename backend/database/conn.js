require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    // Use the DB connection string from the environment variables
    const dbURI = process.env.DB;

    // Connect to the MongoDB database
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Initialize the database connection
connectToDatabase();
