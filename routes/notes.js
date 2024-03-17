const notes = require("express").Router();

// Import our files containing our routes
const notesRouter = require("../public/notes.html");

notes.get('/', (req, res) => res.sendFile(notesRouter));

notes.post('/', (req, res) => {

});

module.exports = notes;