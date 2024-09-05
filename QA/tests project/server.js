const express = require('express');
const sql = require('mssql');
const axios = require('axios'); 
require('dotenv').config();

const app = express();
const port = 3000;

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
        },
    options: {
        trustServerCertificate: true, // Bypass SSL certificate validation
        trustedConnection: true,
        connectTimeout: 30000, // Increase connection timeout to 30 seconds
    },
  };


// Route to get data
app.get('/task1', async (req, res) => {
    try {
        //Send Auth request using Axios
        const response = await axios.get(`https://fakestoreapi.com/products`);
        
        res.json({
            message: 'Products successfully retrieved',
            data: response.data
        });

        //Send the results as JSON
        // res.json(result.recordset);
    } catch (err) {
        console.error('', err);
        res.status(500).send('Server Error');
    }
});

app.get("/task1/:id", async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
  
      if (response.data.rating) {
        res.json({
          //shows only the required values
          name: response.data.title,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          image: response.data.image,
          rating: response.data.rating,
        });
      } else {
        res.json({
          //shows only the required values
          name: response.data.title,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          image: response.data.image,
        });
      }
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error");
    }
  });
  
  app.get('/getCart/:id', async (req, res) => {
    try {
        //Send Auth request using Axios
        const cartID = req.params.id
        const response = await axios.get(`https://fakestoreapi.com/carts/${cartID}`);
        
        res.json({
            message: 'cart successfully retrieved',
            data: response.data
        });

        //Send the results as JSON
        // res.json(result.recordset);
    } catch (err) {
        console.error('', err);
        res.status(500).send('Server Error');
    }
});

app.get("/carts/:id/update", async (req, res) => {
    try {
      const cartId = req.params.id;
  
      // קבלת המשתנים מה-URL (כמו /carts/7/update?userId=3&productId=1&quantity=4)
      const userId = req.query.userId;
      const productId = req.query.productId;
      const quantity = req.query.quantity;
  
      console.log("Received update request for cart:", cartId);
      console.log("Update data:", { userId, productId, quantity });
  
      // נתונים לעדכון בעגלה
      const updatedCartData = {
        userId: userId, // מזהה המשתמש
        date: new Date().toISOString().split("T")[0], // תאריך עדכני
        products: [{ productId: productId, quantity: quantity }],
      };
  
      console.log("Updated cart data:", updatedCartData);
  
      // בקשת PUT לעדכון העגלה
      const response = await axios.put(
        `https://fakestoreapi.com/carts/${cartId}`,
        updatedCartData
      );
  
      console.log("Response from API:", response.data);
  
      // שליחת התוצאה כ-JSON בתגובה
      res.json({
        message: `Cart ${cartId} successfully updated`,
        data: response.data,
      });
    } catch (err) {
      console.error("API error", err);
      res.status(500).send("Server Error");
    }
  });

  //http://localhost:3007/carts/7/update?userId=3&productId=1&quantity=4

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

