const data = require('./data');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
    res.send(data);
})
app.get("/bestseller", (req, res) => {
    res.send(data);
})

app.get("/:productName", (req, res) => {
    const { productName } = req.params;
    let product = data.find(item => item.name === productName);
    if(!product){
        res.status(404).send();   
    }
    res.send(product);
})


app.listen(3000, (req, res) => {
    console.log("localhost:3000")
})