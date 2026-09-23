const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bookRoutes = require("./src/routes/bookRoute")

dotenv.config();

const connectDB = require("./src/db/db")

const app = express()

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Data Base connect
connectDB();

// Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Book Store API is running"
    });
});



// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

