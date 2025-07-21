const express = require("express");
const removeUser = require("../controller/remove.user.controller");

const router = express.Router();

router.delete("/", removeUser);

module.exports = router;
