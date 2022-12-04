const app = require("./config/express");

const { MongoConnection } = require("./config/database");

 (async() => {
  const connection = new MongoConnection();

  try {
    await connection.connectToDB();
    console.log("Database connected successfully")
    app.listen(8000, () => console.log("Application statred at PORT 8000"));
  } catch (err) {
    console.log(err);
  }
})();
