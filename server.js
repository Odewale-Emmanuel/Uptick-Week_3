import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createHttpError from "http-errors";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cors(), cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
