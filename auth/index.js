const app = require("./src/config/express");
const {MongoConnection, MySQLConnection} = require("./src/config/database");
const { PORT } = require("./src/config/vars");

(async () => {
  app.listen(PORT, () => {
    console.log("Server Listening at PORT ", PORT);
  });

  try {
    const connection = new MongoConnection();

     await connection.connectToDb();
    console.log("Successfully connected to the database");
  } catch (err) {
    console.log("There was some error while connecting to the database");
    console.log(err);
  }
})();
