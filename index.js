const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


// Load environment variables
dotenv.config();


const app = express();

// Middleware setup
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());


// Optional: Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));


// Define the port from the environment variable
const port = process.env.PORT || 6000; // Default to port 3000 if not set in .env


const adminRoute = require("./routes/adminRoute");

app.use("/", adminRoute);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));