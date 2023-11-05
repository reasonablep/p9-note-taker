const express = require ('express');

const notesRouter = require ('./notes');

// const homeRouter = require ('./home');

const app = express();

app.use('/notes', notesRouter);
// app.use('/index', homeRouter);

module.exports = app;