const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodoById,
  editTodoById,
} = require("./todo.service");

const router = express.Router();

router.get("/", async (_req, res) => {
  const todos = await getAllTodo();
  res.status(200).json({
    statusCode: 200,
    message: "success get all todo",
    data: todos,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    const todo = await getTodoById(todoId);
    res.status(200).json({
      statusCode: 200,
      message: "success get todo by id",
      data: todo,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = req.body;
    const todo = await createTodo(newTodo);
    res.status(201).json({
      statusCode: 201,
      message: "Succes post data",
      data: todo,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  try {
    await deleteTodoById(parseInt(todoId));
    res.status(200).json({
      statusCode: 200,
      message: "Succes Detele Data",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  const updateTodo = req.body;

  try {
    if (
      !(
        updateTodo.title &&
        updateTodo.desc &&
        updateTodo.done &&
        updateTodo.date &&
        updateTodo.time
      )
    ) {
      res.status(400).json("data not valid");
    }

    const todo = await editTodoById(parseInt(todoId), updateTodo);
    res.status(201).json({
      statusCode: 201,
      message: "Succes update your data",
      data: todo,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  const updateTodo = req.body;

  try {
    const todo = await editTodoById(parseInt(todoId), updateTodo);
    res.status(201).json({
      statusCode: 201,
      message: "Succes update your data",
      data: todo,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
