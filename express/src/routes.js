const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const router = express.Router()

router.use('/todos', todoRouter)

module.exports =  router;

// Design
// MVC
// Model ------> Data layer -----> It helps us interact with the data
// View --------> Presentation layer ------> It presents user with the UI
// Controller -------> Business layer -------> It binds view with Model

// Structural Pattern
