const notes = require("express").Router();

// Import our files containing our routes
const notesRouter = require("../public/notes.html");

router.use("/", notesrouter);

notes.get('/', (req, res) => {

});

notes.post('/', (req, res) => {

});


module.exports = notes;