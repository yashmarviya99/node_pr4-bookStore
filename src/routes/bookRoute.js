const express = require("express");

const router = express.Router();

const { createBook, getBooks, getBook, updateBook, deleteBook } = require("../controller/bookController");

// creatBook
router.post("/", createBook);

// getBook
router.get("/", getBooks);

// get single book
router.get("/:id", getBook);

// updateBook
router.put("/:id", updateBook)

// deleteBook
router.delete("/:id", deleteBook)

module.exports = router;