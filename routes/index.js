// Require express, define router
// const express = require('express');
const router = require('express').Router();
const notesRouter = require('./notes.js');

// Define app for export
// const app = express();

// Apply router path
// app.use('/notes', notesRouter);
router.use('/notes', notesRouter);

// Export app
module.exports = router;