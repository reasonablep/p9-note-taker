// Require express, and give access to file path
const express = require ('express');
const path = require ('path');

// Require index.js containing route information
const api = require ('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Access body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Use static route to /public
app.use(express.static('public'));

// Route to index.js
app.use('/api', api);

// Access notes.html page
app.get('/notes', (req, res) => 
    res.sendFile(path.join
        (__dirname, '/public/notes.html'))
);

// Access index.html page
app.get('*', (req, res) => 
    res.sendFile(path.join
        (__dirname, '/public/index.html'))
);

// Start the application server
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);