const { Op } = require("sequelize");
const db = require("../models/index");

async function getUserNotes(req, res, next) {
  try {
    const { id } = req.query;
    const notes = await db.note.findAll({
      where: {
        user_id: {
          [Op.eq]: id,
        },
      },
    });

    if (!notes.length) {
      return res
        .status(200)
        .send(`Sorry, no note(s) was found for user with id: ${id}`);
    }
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while trying to get user note(s).");
  }
}

module.exports = getUserNotes;
