const mongoose = require("mongoose");

const bookScheme = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        publishedYear: {
            type: Number
        }
    },
    { timestamps: true }
);

const Book = mongoose.model("Book", bookScheme);

module.exports = Book;