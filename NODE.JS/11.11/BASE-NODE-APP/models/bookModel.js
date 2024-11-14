const mongoose = require(`mongoose`);

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    genre:{
        type: String,
    },
    publishedYear:{
        type: Number
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    reviews:
       [{ type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        require: true
       }]  
})

module.exports = mongoose.model(`Book` , bookSchema)