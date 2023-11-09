const express = require('express');
const homeRoute = express.Router();

homeRoute.get('/', (req,res) => 
    readFromFile('./db/db.json').then((data) => res.json
    (JSON.parse(data))
    )
);

module.exports = homeRoute;


// Isn't this route just for getting back to the main page? 