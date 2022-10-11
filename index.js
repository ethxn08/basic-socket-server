//Servidor de Express
const express = require("express");
const app = express();
//Servidor de Sockets
const server = require("http").createServer(app);

//Configuracion del Socket Server
const io = require("socket.io")(server);

//Desplegar el directorio publico
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message-to-client", message);
  });
});

server.listen(8080, () => {
  console.log("Server corriendo en el puerto 8080");
});
