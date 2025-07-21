const express = require("express");
const createUser = require("../controller/user.create.controller");

const router = express.Router();

router.post("/", createUser);

module.exports = router;
