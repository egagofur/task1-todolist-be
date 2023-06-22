//kominikasi dengan database
//ganti ganti orm/ raw query gak menganggu service

const prisma = require("../db");

const findTodo = async () => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      desc: true,
      done: true,
      date: true,
      time: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return todos;
};

const findTodoById = async (id) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      desc: true,
      done: true,
      date: true,
      time: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return todo;
};

const insertTodo = async (todoData) => {
  const todo = await prisma.todo.create({
    data: {
      title: todoData.title,
      desc: todoData.desc,
      done: todoData.done,
      date: todoData.date,
      time: todoData.time,
    },
  });
  return todo;
};

const deleteTodo = async (id) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
};

const updateTodo = async (id, todoData) => {
  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title: todoData.title,
      desc: todoData.desc,
      done: todoData.done,
      date: todoData.date,
      time: todoData.time,
    },
  });
  return todo;
};

module.exports = {
  findTodo,
  findTodoById,
  insertTodo,
  deleteTodo,
  updateTodo,
};
