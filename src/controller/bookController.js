const Book = require("../models/bookModel");


// Create book
const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            message: "Book created sucessfully",
            book
        });

    } catch (error) {
        res.status(501).json({
            message: "Failed to creat book",
            error: error.message
        });
    }
};

// Get all Books
const getBooks = async (req, res) => {
    try {
        const bookes = await Book.find();
        res.status(200).json({
            message: "Books fatched sucessfully", bookes
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to fatch books",
            error: error.message
        });
    }
};

// Get Single Book
const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book Not Found"
            });
        }

        res.status(200).json ({
            message: "Book fetched sucessfully",book
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to fetch book",
            error:error.message
        });
    }
};

// Update Book
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book Not Found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update book",
            error: error.message
        });
    }
};

// Delete Book
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book Not Found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully",
            book
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete book",
            error: error.message
        });
    }
};

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };