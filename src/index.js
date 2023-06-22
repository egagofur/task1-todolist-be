const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

const todoController = require("./todo/todo.controller");
app.use("/api/todos", todoController);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT + "...");
});
