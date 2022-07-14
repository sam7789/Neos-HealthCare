let data = require("../data/data.json");
const { writeDataToFile } = require("../utils/extraFunctions");
const path = require("path");
const crypto = require("crypto");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
}

function create(user) {
  return new Promise((resolve, reject) => {
    const newUser = { id: crypto.randomBytes(10).toString("hex"), ...user };
    data.users.push(newUser);
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve(newUser);
  });
}

function findByPhoneno(phoneno) {
  return new Promise((resolve, reject) => {
    const user = data.users.find((ele) => ele.phoneno === phoneno);
    resolve(user);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const user = data.users.find((ele) => ele.id === id);
    resolve(user);
  });
}
function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const user = data.users.find((ele) => ele.email === email);
    resolve(user);
  });
}

function update(id, user) {
  return new Promise((resolve, reject) => {
    const index = data.users.findIndex((ele) => ele.id === id);
    data.users[index] = { id, ...user };
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve(data.users[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    let newdata = data.users.filter((ele) => ele.id !== id);
    data.users = newdata;
    writeDataToFile(path.join(__dirname, "../data/data.json"), data);
    resolve();
  });
}

module.exports = {
  findAll,
  create,
  findById,
  findByPhoneno,
  findByEmail,
  update,
  remove,
};
