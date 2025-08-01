const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.route");
const userNoteRouter = require("./routes/user.notes.route.js");
const removeUserRouter = require("./routes/remove.user.route");
const removeNoteRouter = require("./routes/remove.note.route");
const updateNoteRouter = require("./routes/update.note.route.js");
const usersRouter = require("./routes/users.route");
const notesRouter = require("./routes/notes.route.js");
const createUserRouter = require("./routes/user.create.route.js");
const createNoteRouter = require("./routes/note.create.route.js");

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

app.use("/user", userRouter);
app.use("/user-note", userNoteRouter);
app.use("/remove-user", removeUserRouter);
app.use("/remove-note", removeNoteRouter);
app.use("/update-note", updateNoteRouter);
app.use("/users", usersRouter);
app.use("/notes", notesRouter);
app.use("/create-user", createUserRouter);
app.use("/create-note", createNoteRouter);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
