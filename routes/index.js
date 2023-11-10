// Require express, define router
const router = require('express').Router();
const notesRouter = require('./notes.js');

// Define router file path
router.use('/notes', notesRouter);

// Export app
module.exports = router;