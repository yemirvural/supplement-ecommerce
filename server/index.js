const data = require('./data');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

const calculateCallingCode = (idd) => {
    if (idd.suffixes && !idd.suffixes[1]) {
        const code = idd.root + idd.suffixes[0];
        return code;
    }
    return idd.root;
}

let cachedFlagData = [];

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
    res.send(data);
})
app.get("/bestseller", (req, res) => {
    res.send(data);
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