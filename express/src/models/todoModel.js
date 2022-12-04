const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type : String,
    required: "Title is required"
  },
  completed: Boolean
});

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo