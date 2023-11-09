const notesRoute = require('express').Router();
const {readFromFile, readAndAppend} = require ('../helpers/fsutils');
const {v4: uuidv4} = require('uuid');
const express = require('express');

// Body parser provides req.body

notesRoute.use(express.json());
notesRoute.use(express.urlencoded({extended: true}));

// Get notes from db.json when the root directory is requested

notesRoute.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))
    );
});

// Posts a note to the application when HTTP request contains destructed elements 'title' and 'text'
// Assigns random UUID and appends the note to db.json

notesRoute.post('/', (req,res) => {

const {title,text} = req.body;

if (title && text) {
    const newNote = {
        title,
        text,
        noteId: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully.`);

} else {
    res.status(400).send('Error adding note')
}

// Delete note when ID matches the ID clicked in the event handler in /public/assets/js/index.js

notesRoute.delete(`/api/notes/${id}`, (req, res) => {

if (req.method === 'delete') {
    res.json(`Note deleted`)
}

})

});

module.exports = notesRoute;