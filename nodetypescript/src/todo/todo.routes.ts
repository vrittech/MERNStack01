import express from 'express';
import TodoModel from './todo';
import TodoController from './todo.controller';
import TodoService from './todo.service';

const todoRouter = express.Router();

const todoController = new TodoController(new TodoService(TodoModel));

todoRouter.post('/', todoController.create)

todoRouter.get('/', todoController.findAll)

export default todoRouter