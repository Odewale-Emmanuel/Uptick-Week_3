const db = require("../models/index");

async function getAllUsers(req, res, next) {
  try {
    const users = await db.user.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while trying to get all user information.");
  }
}

module.exports = getAllUsers;
