const http = require("http");
const {
  getWelcomeGreet,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("./controllers/userController");

const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  getUserTodos,
} = require("./controllers/todoController");

const server = http.createServer((req, res) => {
  // no-cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.url === "/" && req.method === "GET") {
    getWelcomeGreet(req, res);
  } else if (req.url === "/users" && req.method === "GET") {
    getUsers(req, res);
  } else if (req.url === "/register" && req.method === "POST") {
    createUser(req, res);
  } else if (
    req.url.match(/\/users\/\w+/) &&
    (req.method === "PATCH" || req.method === "PUT")
  ) {
    const id = req.url.split("/")[2];
    updateUser(req, res, id);
  } else if (req.url.match(/\/users\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    deleteUser(req, res, id);
  } else if (req.url === "/login" && req.method === "POST") {
    loginUser(req, res);
  } else if (req.user === "/todos" && req.method === "GET") {
    getAllTodos(req, res);
  } else if (req.url === "/todos" && req.method === "POST") {
    createTodo(req, res);
  } else if (req.url.match(/\/todos\/\w+/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    getTodo(req, res, id);
  } else if (
    req.url.match(/\/todos\/\w+/) &&
    (req.method === "PATCH" || req.method === "PUT")
  ) {
    const id = req.url.split("/")[2];
    updateTodo(req, res, id);
  } else if (req.url.match(/\/todos\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    deleteTodo(req, res, id);
  } else if (req.url.match(/\/usertodos\/\w+/) && req.method === "GET") {
    const userId = req.url.split("/")[2];
    getUserTodos(req, res, userId);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = server;
