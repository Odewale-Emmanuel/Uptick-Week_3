const express = require("express");
const removeNote = require("../controller/remove.note.controller");

const router = express.Router();

router.delete("/", removeNote);

module.exports = router;
