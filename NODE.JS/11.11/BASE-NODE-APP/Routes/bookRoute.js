const express = require(`express`)
const { createBook, getAllBooks, getAllBooksByAuthor, getBookById, deleteBook } = require(`../controller/bookController`)

const router = express.Router();

router.post("/" , createBook);

router.get("/", getAllBooks);

router.get("/author/:author" , getAllBooksByAuthor);

router.get("/:id" , getBookById);

router.delete("/:id" , deleteBook)

module.exports = router