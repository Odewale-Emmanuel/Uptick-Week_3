const db = require("../models/index");
const { v1: uuidv1 } = require("uuid");

async function createUser(req, res, next) {
  try {
    await db.user.create(req.body);
    res.status(201).send("user created successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "An error occurred while trying to create new user. please make sure new user id is unique (not found in our database)"
      );
  }
}

module.exports = createUser;
