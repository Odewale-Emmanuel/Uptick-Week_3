const express = require("express");
const getUserNotes = require("../controller/user.notes.controller");

const router = express.Router();

router.get("/", getUserNotes);

module.exports = router;
