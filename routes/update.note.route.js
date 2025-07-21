const express = require("express");
const updateNote = require("../controller/note.update.controller");

const router = express.Router();

router.patch("/", updateNote);

module.exports = router;
