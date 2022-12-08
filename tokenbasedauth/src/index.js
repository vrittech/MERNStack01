const {server} = require("./config/webscoket");

const { MongoConnection } = require("./config/database");

 (async() => {
  const connection = new MongoConnection();

  try {
    await connection.connectToDB();
    console.log("Database connected successfully")
    server.listen(8000, () => console.log("Application statred at PORT 8000"));
  } catch (err) {
    console.log(err);
  }
})();

// Real time application
// Websocket two different application
// Websocket has two parts server client
// Websocket protocol
// ws://localhost:8000 http://localhost:8000
// Broadcasting, multicasting
// Chat app, live messenging, live reload
// TCP, UDP sockets web 

