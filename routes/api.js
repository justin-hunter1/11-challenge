const api = require("express").Router();
const uuid = require("../helpers/uuid.js");
const notesData = require("../db/db.json");
const fs = require("fs");


// API GET route for reading all entries in file
api.get('/notes', (req, res) => {
  console.log(`${req.method} request received`);
  fs.readFile('./db/db.json', (err, data) => {
    if (err) { 
      return console.error("no records");
    }
    else {
      let readNotes = JSON.parse(data);
      res.json(readNotes);
    }
  });
});


// API POST route for creating entries in file
api.post('/notes', (req, res) => {
  console.log(`${req.method} request received.`);
  const newNote = req.body;
  newNote.id = uuid();
  notesData.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  res.json(notesData);
});

module.exports = api;
