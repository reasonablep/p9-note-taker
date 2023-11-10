const notesRoute = require('express').Router();
const {readFromFile, readAndAppend} = require ('../helpers/fsutils');
const {v4: uuidv4} = require('uuid');
const fs = require ('fs');

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
        id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully.`);

} else {
    res.status(400).send('Error adding note')
}
}
)

// Delete note when ID matches the ID clicked in the event handler in /public/assets/js/index.js



notesRoute.delete(`/:id`, (req, res) => {
const noteId = req.params.id;
console.log(req.params.id)
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the database' })
        }
    
        let notes = JSON.parse(data);
        const index = notes.findIndex(note => note.id === noteId);

        if (index === -1) {
            return res.status(404).json({ error: 'Note not found' })
        }

        notes.splice(index, 1);

        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 5), err => {

            if (err) {
                return res.status(500).json({ error: 'Error updating the database' });

            }

            res.json({message: 'Note deleted'})
            
        });

    });

});


module.exports = notesRoute;