const db = require("../models/index");

async function createUser(req, res, next) {
  try {
    await db.note.create(req.body);
    res.status(201).send("note created successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while trying to create a new note.");
  }
}

module.exports = createUser;
