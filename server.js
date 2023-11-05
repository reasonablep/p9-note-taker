const express = require ('express');
const path = require ('path');

const api = require ('./routes/index.js');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/notes.html'));


});

// is it normal that req is unreachable in these blocks? does not matter? (could we only specify "res" as a parameter below?)

// app.get('/', (req,res) => {
// res.sendFile(path.join(_dirname, 'index.html'))

// });

app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`)
});