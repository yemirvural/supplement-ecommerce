const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController')
const mongoose = require('mongoose');

const data = require('./data');
let cartData = require('./cartData');
dotenv.config({ path: './config.env' })

const app = express();
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)


const calculateCallingCode = (idd) => {
    if (idd.suffixes && !idd.suffixes[1]) {
        const code = idd.root + idd.suffixes[0];
        return code;
    }
    return idd.root;
}

let cachedFlagData = [];

mongoose.connect(DB).then(() => console.log('DB Connection successful!'))

app.use(cors());
app.use(bodyParser.json());

app.post('/login', authController.login)
app.post('/register', authController.register)

app.get("/products", (req, res) => {
    res.send(data);
})
app.get("/bestseller", (req, res) => {
    res.send(data);
})
app.get("/cart/:id", (req, res) => {
    const { id } = req.params;
    const userCartData = cartData.find((data) => data.userId === id);
    if (userCartData) {
        res.send(userCartData);
    }
    res.status(400).json({ error: 'User doesnt found' });
})
app.post("/cart/:id/updateGifts", (req, res) => {
    const { id } = req.params;
    const gifts = req.body;
    const userData = cartData.find((data) => data.userId === id);
    userData.gifts = gifts;
    res.status(200).send(userData);
})

app.post("/cart/:id", (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const userData = cartData.find((data) => data.userId === id);
    const dataProduct = userData.products.find(item => item.id === product.id)


    if (!userData) {
        const newData = {
            userId: id,
            products: [product]
        }
        cartData.push(newData);
        res.status(200).send(cartData);
        console.log("1")
    }
    if (!product) {
        console.log("2")
        res.status(404).json({ info: 'There is not product to add cart' })
    }
    if (!dataProduct || dataProduct.aroma !== product.aroma || dataProduct.size !== product.size) { // ??? | REFACTOR
        userData.products.push(product)
        console.log("3")
        res.status(200).send(cartData);
    }
    if (dataProduct.aroma === product.aroma && dataProduct.size === product.size) { // ??? | REFACTOR
        dataProduct.amount += product.amount;
        console.log("4")
        res.status(200).send(cartData);
    }
    console.log(...cartData)
    //res.status(200).json({ info: 'Product added to cart successfully!' });
})
app.patch("/cart/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const userData = cartData.find((data) => data.userId === id);
    const product = userData.products.find((el) => el.id === data.id && el.aroma === data.aroma && el.size === data.size) // Gifts ??

    if (product) {
        product.amount = data.count
    }
    res.status(200).send(cartData);
})
app.delete("/cart/:id", (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const userData = cartData.find((data) => data.userId === id);
    const product = userData.products.find((el) => el.id === data.id && el.aroma === data.aroma && el.size === data.size) // Gifts ??

    const filteredCartData = userData.products.filter((item) => item !== product);
    userData.products = filteredCartData;

    if (userData) {
        res.send(cartData);
    }
    res.status(400).json({ error: 'User doesnt found' });
})
app.get("/flagData", async (req, res) => {
    try {
        if (cachedFlagData.length > 0) {
            return res.json(cachedFlagData);
        }
        const response = await axios.get('https://restcountries.com/v3.1/all');

        const flagData = response.data
            .map(country => ({
                name: country.translations.tur.common,
                code: country.cca2,
                callingCode: calculateCallingCode(country.idd),
                flags: country.flags,
            }))
            .sort((a, b) => a.name.localeCompare(b.name));

        cachedFlagData = flagData;
        res.json(flagData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get("/:productName", (req, res) => {
    const { productName } = req.params;
    let product = data.find(item => item.name === productName);
    if (!product) {
        res.status(404).send();
    }
    res.send(product);
})


app.listen(3000, (req, res) => {
    console.log("localhost:3000")
})