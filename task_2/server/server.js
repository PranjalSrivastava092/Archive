const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const database = {};

io.on("connection", socket => {
  let pid;
  const join = cid => {
    socket.leave(cid);
    socket.join(cid);
    pid = cid;
  };

  socket.on("get", did => {
    join(did);
    socket.emit("document", database[did]);
  });

  socket.on("add", doc => {
    database[doc.id] = doc;
    join(doc.id);
    //broadcasting to all clients.
    io.emit("documents", Object.keys(database));
    socket.emit("document", doc);
  });

  socket.on("edit", doc => {
    database[doc.id] = doc;
    io.emit("document", doc);
  });

  io.emit("documents", Object.keys(database));
});

http.listen(8080);