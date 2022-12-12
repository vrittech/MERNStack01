const connectToDB = require("./config/database");
const { PORT } = require("./config/envrionments");
const app = require("./config/express");

 connectToDB()
  .then(() =>
    app.listen(PORT, () => console.log(`App running at PORT ${PORT}`))
  )
  .catch((err) => console.log(err));
