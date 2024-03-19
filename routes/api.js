const api = require("express").Router();
const uuid = require("../helpers/uuid.js");
const notesData = require("../db/db.json");
const fs = require("fs");


// Import our files containing our routes
// const apirouter = require("../public");



api.get("/api/notes", (req, res) => res.json(notesData));

api.post("/api/notes", (req, res) => {
  console.log(`${req.method} request received.`);

  const { product, review, username } = req.body;

  if (product && review && username) {
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };
  
// Convert the data to a string so we can save it
    const reviewString = JSON.stringify(newReview);
  
// Write the string to a file
    fs.writeFile("../db/db.json", reviewString, (err) =>
      err ? console.error(err) : console.log(`Review for ${newReview.product} has been written to JSON file`))
  }
});


module.exports = api;