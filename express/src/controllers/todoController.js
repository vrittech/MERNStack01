const Todo = require('../models/todoModel')
const TodoController = {
    getTodo : async (req,res) => {
        const todos = await Todo.find();
        return res.status(200).json({todos})
    },

    postTodo : async (req,res) => {
        const {title, completed} = req.body;
        const todo = {title, completed};
        try{
            const savedTodo= await new Todo(todo).save()
            return res.status(200).json({
                message : "Todo created successfully",
                todo : savedTodo
            })
        }catch(err){
            return res.status(400).json({
                message : err.message
            })
        }
       
    }
 }

 module.exports = TodoController