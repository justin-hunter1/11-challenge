// Dependencies
const express = require("express");
const api = require("./routes/api.js");
const notes = require("./routes/notes.js");

// app use express
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes to route files
app.use("/notes", notes);
app.use("/api", api);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')));


  api.listen(PORT, () => {
    console.log(`Server available at localhost:${PORT}`);
  });
  