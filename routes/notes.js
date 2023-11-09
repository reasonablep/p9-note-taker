const notesRoute = require('express').Router();
const {readFromFile, readAndAppend} = require ('../helpers/fsutils');
const {v4: uuidv4} = require('uuid');
const express = require('express');

notesRoute.use(express.json());
notesRoute.use(express.urlencoded({extended: true}));

notesRoute.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))
    );


});

notesRoute.post('/', (req,res) => {

const {title,text} = req.body;

if (title && text) {
    const newNote = {
        title,
        text,
        noteId: uuidv4(),
    };

    console.log(newNote);

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully.`);


} else {
    res.status(400).send('Error adding note')
};

})

module.exports = notesRoute;