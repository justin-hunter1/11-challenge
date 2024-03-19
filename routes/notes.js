const notes = require("express").Router();
const path = require("path");


notes.get('/', (req, res) => res.sendFile(path.join(__dirname, '/notes')));  //.html

// notes.post('/', (req, res) => {

// });

module.exports = notes;