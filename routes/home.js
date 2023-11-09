const express = require('express');
const homeRoute = express.Router();

// Don't think this page is actually doing anything..

// Get route reads the contents of db.json

// homeRoute.get('/', (req,res) => 
//     readFromFile('./db/db.json').then((data) => res.json
//     (JSON.parse(data))
//     )
// );

module.exports = homeRoute;