const axios = require('axios');
const getToken = require('../utils/getToken');
const { v4: uuidv4 } = require('uuid')


const getProducts = async (req, res) => {
    try {
        const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

        const allproducts = [];

        const token = await getToken();

        categories.forEach(async cat => {
            const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${cat}/products?top=10&minPrice=1&maxPrice=100000`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            response.data.map(dta => {
                allproducts.push({ category: cat, dta, id: uuidv4 });
            })
        })

        setTimeout(() => {
            res.status(200).json({
                success: true,
                allproducts
            });
        }, 1000);


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getByCategory = async (req, res) => {
    try {

        const token = getToken();

        const cat = req.params.categoryname;
        const company = req.params.company;
        const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${cat}/products?top=10&minPrice=1&maxPrice=100000`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        res.status(200).json({
            success: true,
            response
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const token = await getToken();
        const cate = req.params.categoryname;
        const name = req.params.productid;
        const product = null;

        const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

        const allproducts = [];

        categories.forEach(async cat => {
            const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${cate}/products?top=10&minPrice=1&maxPrice=100000`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            product = response.data.find(itm=>itm.productName===name);
        })

        res.status(200).json({
            success:true,
            product
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = { getProducts, getByCategory, getSingleProduct };