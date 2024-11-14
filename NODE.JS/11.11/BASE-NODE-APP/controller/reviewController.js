const Review = require(`../models/ReviewModel.js`);

const createReview = async (req , res) =>{
    const bookId = req.params;
    const { reviewText, rating } = req.body;
    try {
        const newReview = new Review({
            reviewText,
            rating
        });

    } catch (error) {
        
    }
}
module.exports = {
    createReview
}