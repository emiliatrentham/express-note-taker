// Dependencies
const express = require("express");
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend, } = require("../helpers/fsUtils");

// Allows for unique ids to be created
const uuid = require("../helpers/uuid");



// GET Route for retrieving and returning all saved notes as JSON
router.get("/notes", (req, res) => {
  console.info(`${req.method} `);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
router.post("/notes", (req, res) => {
  console.info(`${req.method}`);
  console.log(req.body);

  const {title, text} = req.body;
   if (req.body) {
     const newNote = {
      title,
      text,
      id: uuid(),
    };

     readAndAppend(newNote, "./db/db.json");
     console.log(newNote);
    res.json(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding Note");
  }
});

// Deletes note with specific id
router.delete('/notes/:uuid', async (req, res) => {
  const uuid = req.params.uuid;
  const existingData = await readFromFile("./db/db.json");
  const jsonData = JSON.parse(existingData);
  const filteredData = jsonData.filter((data) => {
    return data.id !== uuid;
  })
  writeToFile('./db/db.json', filteredData);
  res.json('Success!');
});

module.exports = router;