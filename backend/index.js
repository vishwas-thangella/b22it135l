const express = require('express');
const { getByCategory,getProducts, getSingleProduct } = require('./controllers/product');
const cors = require('cors');

require('dotenv').config();


const app = express();

app.use(cors());
app.get('/products',getProducts);
app.get('/categories/:categoryname/products',getByCategory);
app.get('/categories/:categoryname/products/:productid',getSingleProduct)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});