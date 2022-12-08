const { createServer } = require("http");
const Websocket = require("ws");
const app = require("./express");
const queryString = require("query-string");
const Clients = require("./clients");
const server = createServer(app);

const ws = new Websocket.Server({
  server,
});

//Listener
ws.on("connection", (ws, request, client) => {
  const query = request.url.split("/")[1];
  
  const {user_id} = queryString.parse(query)
  
  Clients.setClient(user_id, ws)

//   console.log(CLIENTS)


  ws.on("message", (message) => {
   //This can be used to brodcast the message
   console.log(message.toString())
  });

  ws.on("close", () => {
    console.log("Socket closed");
  });

  
});

module.exports = {server};
