const db = require("../models/index");

async function getAllNotes(req, res, next) {
  try {
    const notes = await db.note.findAll();
    if (!notes.length) {
      return res
        .status(200)
        .send(
          "sorry our database does not have notes for now. try creating one using (/create-note) or the proper note route"
        );
    }
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while trying to get all note.");
  }
}

module.exports = getAllNotes;
