const express = require("express");
const createNote = require("../controller/note.create.controller");

const router = express.Router();

router.post("/", createNote);

module.exports = router;
