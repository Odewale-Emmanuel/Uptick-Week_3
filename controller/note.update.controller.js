const { where, Op } = require("sequelize");
const db = require("../models/index");

async function updateNote(req, res, next) {
  try {
    const { id } = req.body;

    const note = await db.note.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    if (!note) {
      return res.status(404).send(`Sorry, note with id: ${id} not found!`);
    }

    await note.update({ title: req.body.title, content: req.body.content });

    res.status(200).send(`Note with id: ${id} updated successfully`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred while trying to update the requested note. Please ensure you send a valid note id"
      );
  }
}

module.exports = updateNote;
