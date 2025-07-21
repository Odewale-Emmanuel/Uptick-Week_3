const db = require("../models/index");

async function getUser(req, res, next) {
  try {
    const { id } = req.query;
    const user = await db.user.findAll({
      where: {
        id: id,
      },
    });

    if (!user.length) {
      return res.status(200).send(`Sorry user with id: ${id} not found!`);
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred while trying to get requested user. please ensure you send a valid user id"
      );
  }
}

module.exports = getUser;
