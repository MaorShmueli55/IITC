const Book = require(`../models/bookModel.js`);

const createBook = async (req , res) =>{
    const { title, author, gender, publishedYear } = req.body;
    if(!title || !author || !gender){
        return res.status(400).send(`title, author, gender are required`);
    }
    try {
        const newBook = new Book({
            title, 
            author, 
            gender, 
            publishedYear
        });
        await newBook.save();
        res.status(200).send({
            status: `success`,
            message: `Book Succefully Regitered`,
            data: newBook
        })
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllBooks = async (req , res) =>{
    try {
        const books = await Book.find();
        res.status(200).send({
            status: "success",
            data: books
        })
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

const getAllBooksByAuthor = async (req , res) =>{
    const { author } = req.params;
    try {
        const allBooks = await Book.find();
        const authorBook = [] 
        allBooks.forEach((currentBook) => {
            if(currentBook.author === author){
                authorBook.push(currentBook);
            }
        });
        if(authorBook.length === 0){
            return res.status(400).send("author not exists")
        }
        res.status(200).send({
            status: "success",
            data: authorBook
        })
    } catch (error) {
        console.error(error);
        res.status(500).send(error); 
    }
}

const getBookById = async (req , res) =>{
    console.log("test");
    
    const { id } = req.params;
    console.log(id);
    
    try {
        const book = await Book.findById(id);
        console.log(book);
        
        if(!book){
            return res.status(400).send("book not exists")
        }
        res.status(200).send({
            status: "success",
            data: book
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);  
    }
}

const deleteBook = async (req , res) =>{
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(400).send("book not exists")
        }
        res.status(200).send({
            status: "success",
            message: "book delete"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error); 
    }
}

module.exports = {
    createBook,
    getAllBooks, 
    getAllBooksByAuthor,
    getBookById,
    deleteBook
}