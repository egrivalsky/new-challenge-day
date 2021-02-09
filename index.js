const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const { default: axios } = require('axios');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
        res.send('pokemon')
    });

app.get('/pokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then((data) => {
        res.send(data)
    })
});


const PORT = process.env.PORT || 8000;
app.listen(PORT);