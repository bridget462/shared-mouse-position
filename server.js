const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(3000);
// io stands for input, output
const io = socket(server);

console.log("my server is running baby!");

// host every file in public folder
app.use(express.static("./public"));

// socket event listener
io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log(`newConnection: ${socket.id}`);

  socket.on("mouse", mouseMsg);

  function mouseMsg(mousePosition) {
    // sending data except ourself
    socket.broadcast.emit("mouse", mousePosition);
    // sending data including ourself
    // io.sockets.emit("mouse", mousePosition);
  }
}
