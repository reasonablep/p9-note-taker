const notesRoute = require('express').Router();
const {readFromFile, readAndAppend} = require ('../helpers/fsutils');
const {v4: uuidv4} = require('../helpers/uuid');

notesRoute.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))
    );


});

notesRoute.post('/', (req,res) => {

const {title, note, id} = req.body;

if (req.body) {
    const newNote = {
        title,
        note,
        id,
        noteId: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully.`);

} else {
    res.status(400).send('Error adding note')
};

})

module.exports = notesRoute;