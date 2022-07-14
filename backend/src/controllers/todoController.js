const Todo = require("../models/todoModel");

const { getPostData, TodoValidator } = require("../utils/extraFunctions");

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  } catch (error) {
    console.log(error);
  }
}

async function createTodo(req, res) {
  try {
    const body = await getPostData(req);
    let result = TodoValidator(body);
    if (!result.status) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: result.error }));
    } else {
      const { title, userId, status } = JSON.parse(body);
      const todo = await Todo.create({
        title,
        userId,
        status,
        createdAt: new Date(),
      });
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          id: todo.id,
          title: todo.title,
          status: todo.status,
          userId: todo.userId,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

async function getTodo(req, res, id) {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        id: todo.id,
        title: todo.title,
        status: todo.status,
        userId: todo.userId,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(req, res, id) {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
    const body = await getPostData(req);
    let result = TodoValidator(body);
    if (!result.status) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: result.error }));
    }
    const { title, userId, status } = JSON.parse(body);
    const todoData = {
      id: todo.id,
      title: title || todo.title,
      userId: userId || todo.userId,
      status: status || todo.status,
      createdAt: todo.createdAt,
      updatedAt: new Date(),
    };
    const updatedTodo = await Todo.update(id, todoData);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        id: updatedTodo.id,
        title: updatedTodo.title,
        status: updatedTodo.status,
        userId: updatedTodo.userId,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo(req, res, id) {
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo Not Found" }));
    }
    await Todo.remove(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Todo Deleted" }));
  } catch (error) {
    console.log(error);
  }
}

async function getUserTodos(req, res, id) {
  try {
    const todos = await Todo.findByUserId(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getUserTodos,
};
