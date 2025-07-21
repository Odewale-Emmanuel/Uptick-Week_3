const express = require("express");
const getAllNotes = require("../controller/notes.controller");

const router = express.Router();

router.get("/", getAllNotes);

module.exports = router;
