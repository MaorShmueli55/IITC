const express = require(`express`)
const {createReview} = require(`../controller/reviewController.js`)

const router = express.Router();

router.post("/api/books/:bookId/reviews" , createReview)

module.exports = router