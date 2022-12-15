import { Model } from "mongoose";
import { ITodo } from "./todo";

export interface IBaseService<T> {
  findAll: () => Promise<T[]>;
  create: (data: T) => Promise<T>;
}

export interface ITodoService extends IBaseService<ITodo> {}

export class BaseService<T> implements IBaseService<T> {
  private model;
  constructor(_model: Model<T>) {
    this.model = _model;
  }
  async findAll(): Promise<T[]> {
    const data = await this.model.find({});
    return data;
  }

  async create(data: T): Promise<T> {
    const createdData = await this.model.create({ ...data });

    return createdData;
  }
}

export default class TodoService
  extends BaseService<ITodo>
  implements ITodoService
{
  private todoModel;
  constructor(Todo: Model<ITodo>) {
    super(Todo);
    this.todoModel = Todo;
  }
}
