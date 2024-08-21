console.log("baba!");
const express = require("express")
const app = express()
const contact = {email : "maor@1234", phone: "050000000"}
const product = [
    {id: "1",
     name: "iphone",
     price: 4500   
    },
    {
        id: "2",
        name: "galaxy",
        price: 4000
    },
    {
        id:"3",
        name: "nokiya",
        price : 300
    }
];

app.get("/", (req, res) => {
    res.send("Welcome to my basic Express server!")
});

app.get("/about", (req, res) => {
    res.json("This server was created by Maor")
});

app.get("/contact", (req, res) => {
    res.json(contact)
});


app.get("/api/product", (req, res) => {
    res.send(product)
});

app.get("/api/product/:productID", (req, res) => {
    const productId = req.params.productID;
    let product1 = null
    for(let i = 0; i < product.length; i++){
        if(product[i].id === productId)  product1 = product[i]
    }
    if (product1 === null) res.send("product not found")
        else res.json(product1)
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });