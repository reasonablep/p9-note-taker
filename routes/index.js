const express = require ('express');

const notesRouter = require ('../public/notes.html');

const indexRouter = require ('../public/index.html');

const app = express();

app.use('../public/notes.html', notesRouter);
app.use('../public/index.html', indexRouter);

module.exports = app;