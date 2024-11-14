const express = require(`express`);
const mongoose = require(`mongoose`);
require(`dotenv`).config();

//Models import
const userRouter = require(`./Routes/userRout.js`)
const bookRouter = require(`./Routes/bookRoute.js`)



const PORT = 3000;
const dbUri = process.env.DB_URI;

const app = express();

app.use(express.json());

mongoose.connect(dbUri).then(()=>{
    console.log("DB connected");
    
})

app.get("/" , (req , res)=>{
    res.status(200);
    res.send("Hello");
});

app.use(`/api/users`, userRouter)

app.use(`/api/books`, bookRouter)

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})