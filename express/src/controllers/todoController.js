const TodoModel = require("../models/todoModel")

const TodoController = {
    getTodo : (req,res) => {
        const todos = TodoModel.getTodo();
        return res.status(200).json({todos})
    },

    postTodo : (req,res) => {
        const todo = req.body;
        TodoModel.insertTodo(todo);
        return res.status(200).json({
            message : "Todo created successfully"
        })
    }
 }

 module.exports = TodoController