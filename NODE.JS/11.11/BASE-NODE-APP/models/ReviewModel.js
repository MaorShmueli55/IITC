const mongoose = require(`mongoose`);

const reviewSchema = new mongoose.Schema({
    reviewText:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        require: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})