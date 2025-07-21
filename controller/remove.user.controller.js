const { where, Op } = require("sequelize");
const db = require("../models/index");

async function removeUser(req, res, next) {
  try {
    const { id } = req.query;

    const user = await db.user.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    if (!user.length) {
      return res.status(200).send(`Sorry user with id: ${id} not found!`);
    }

    await db.note.destroy({
      where: {
        user_id: {
          [Op.eq]: id,
        },
      },
    });

    await db.user.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });

    res.status(200).send(`user with id: ${id} deleted successfully`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred while trying to removing requested user. please ensure you send a valid user id"
      );
  }
}

module.exports = removeUser;
