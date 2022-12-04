const express = require("express");
const router = require("./src/routes");
const mongoose = require("mongoose");
//mongodb://localhost:27017
//
const app = express();

app.use(
  express.json({
    urlencoded: true,
  })
);

// I will connect to the database here
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.mcwgvlm.mongodb.net/todo?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Database connected successfully");
  }
);
//
/*
req
res
next
*/
//Middleware
app.use("/", router);

app.listen(8000, () => {
  console.log("App running at port 8000");
});

// Event loop
// How it works
