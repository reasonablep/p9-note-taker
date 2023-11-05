const notesRoute = require ('express').Router;
const {readFromFile, readAndAppend} = require ('fsUtils');
const {v4: uuidv4} = require('uuid');

notesRoute.get('/', (req,res) => {
    console.log(`${req.method} request received!`);
    readFromFile('./db/db.json').then


}); 

notesRoute.post('/', (req,res) => {
console.log(`${req.method} request received!`);

if (req.body) {
    const newNote = {
        title,
        note,
        id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);

} else {
    res.error(`Error adding note`)
}

})

module.export = notesRoute;