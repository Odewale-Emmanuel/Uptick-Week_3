const Sequelize = require("sequelize");
const createHttpError = require("http-errors");
const db = require("../models/index");

async function getAllNotes(req, res, next) {
  try {
    const notes = await db.note.findAll();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while trying to get requested information.");
  }
}

module.exports = getAllNotes;
