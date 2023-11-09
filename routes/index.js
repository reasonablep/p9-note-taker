const express = require ('express');

// Define express routers for each page

const notesRouter = require ('./notes.js');
const homeRouter = require ('./home.js');

// Define app for export

const app = express();

// Apply router paths

app.use('/notes', notesRouter);
app.use('/home', homeRouter);

module.exports = app;