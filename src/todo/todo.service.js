const {
  findTodo,
  findTodoById,
  insertTodo,
  deleteTodo,
  updateTodo,
} = require("./todo.repository");

const getAllTodo = async () => {
  const todos = await findTodo();

  return todos;
};

const getTodoById = async (id) => {
  const todo = await findTodoById(id);

  if (!todo) {
    throw Error("todo not found");
  }
  return todo;
};

const createTodo = async (data) => {
  const todo = insertTodo(data);
  return todo;
};

const deleteTodoById = async (id) => {
  await getTodoById(id);
  await deleteTodo(id);
};

const editTodoById = async (id, data) => {
  await getTodoById(parseInt(id));
  const todo = await updateTodo(id, data);
  return todo;
};

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodoById,
  editTodoById,
};
