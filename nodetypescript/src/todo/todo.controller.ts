import { Request, Response } from "express";
import { ITodo } from "./todo";
import { ITodoService } from "./todo.service";


export default class TodoController {
  TodoService;
  constructor(TodoService: ITodoService) {
    this.TodoService = TodoService;
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
  }

  async findAll(_: Request, res: Response) {
    try {
      const todos = await this.TodoService.findAll();
     
      return res.status(200).json({
        message: "Todo Fetched Successfully",
        data: {
          todos,
        },
      });
    } catch (err) {
      return res.status(400).json({
        message: "There were some errors",
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const todo = req.body as ITodo;
      const createdTodo = await this.TodoService.create(todo);
      return res.status(200).json({
        message: "Todo created Successfully",
        data: {
          createdTodo,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "There were some errors",
      });
    }
  }
}
