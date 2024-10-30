import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"

const uri = "mongodb+srv://maorshmueli5:maor12345@cluster0.vxf8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})

const PORT = 3000

const app = express()

app.use(morgan("tiny"))


app.get("/" , (_req, res)=>{
    res.send({
        message: "Hello"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
})