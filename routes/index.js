const express = require ('express');

const notesRouter = require ('./notes.js');
const homeRouter = require ('./home.js');

const app = express();

app.use('/notes', notesRouter);
app.use('/home', homeRouter);

module.exports = app;