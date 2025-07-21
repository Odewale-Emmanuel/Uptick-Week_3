const { where, Op } = require("sequelize");
const db = require("../models/index");

async function removeNote(req, res, next) {
  try {
    const { id } = req.query;

    const note = await db.note.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    if (!note.length) {
      return res.status(200).send(`Sorry note with id: ${id} not found!`);
    }

    await db.note.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    res.status(200).send(`note with id: ${id} deleted successfully`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred while trying to remove the requested note. please ensure you send a valid note id"
      );
  }
}

module.exports = removeNote;
