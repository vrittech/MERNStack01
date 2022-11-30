let TODOS = []

const TodoModel = {
    getTodo : () => {
        return TODOS;
    },

    insertTodo : (todo) => {
      TODOS.push(todo)  
    }
}

module.exports = TodoModel