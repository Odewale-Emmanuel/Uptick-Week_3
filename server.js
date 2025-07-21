const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
// const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");
// const db = require("./models/index.js");
const usersRouter = require("./routes/users.route");
const notesRouter = require("./routes/notes.route.js");
const createUserRouter = require("./routes/user.create.route.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(), cookieParser());

app.get("/", async (req, res) => {
  try {
    res.send("my second server using express");
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.use("/users", usersRouter);
app.use("/notes", notesRouter);
app.use("/create-user", createUserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
