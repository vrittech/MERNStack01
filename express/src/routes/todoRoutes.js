const express = require('express')
const TodoController = require('../controllers/todoController')

const todoRouter = express.Router()

todoRouter.get('/',TodoController.getTodo )

//Post request saves the data from client to server
// data hiding
todoRouter.post('/', TodoController.postTodo)

module.exports = todoRouter