let data = require("../data/data.json");
const path = require("path");
const { writeDataToFile } = require("../utils/extraFunctions");
const crypto = require("crypto");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(data.todos);
  });
}

function create(todo) {
  return new Promise((resolve, reject) => {
    let { title, status, userId, createdAt } = todo;
    const newTodo = {
      id: crypto.randomBytes(10).toString("hex"),
      title,
      status,
      userId,
      createdAt,
    };
    data.todos.push(newTodo);
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve(newTodo);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const todo = data.todos.find((ele) => ele.id === id);
    resolve(todo);
  });
}

function findByUserId(userId) {
  return new Promise((resolve, reject) => {
    const todo = data.todos.filter((ele) => ele.userId === userId);
    resolve(todo);
  });
}

function update(id, todo) {
  return new Promise((resolve, reject) => {
    const index = data.todos.findIndex((ele) => ele.id === id);
    data.todos[index] = { id, ...todo };
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve(data.todos[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    let todo = data.todos.find((ele) => ele.id === id);
    data.expiredTodos.push(todo);
    let update = data.todos.filter((ele) => ele.id !== id);
    data.todos = update;
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve();
  });
}

module.exports = {
  findAll,
  create,
  findById,
  findByUserId,
  update,
  remove,
};
