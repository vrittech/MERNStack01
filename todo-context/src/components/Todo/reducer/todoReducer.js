import { TODO_ACTIONS } from "../actions/todoAction";

const completeTodo = (state, id) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};

const addTodo = (state, todo) => {
  return [{title : todo, id :state.length + 1, userId : '123', completed: false},...state]
};

const deleteTodo = (state, id) => {
  return state.filter((todo) => todo.id !== id)
};

const editTodo = (state, {id, title}) => {
  return state.map((todo)  => {
    if(id === todo.id){
      return {...todo, title}
    }
    return todo
  })
}


//Controller View
export  const TodoController = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODOS:
      return [...action.payload];
    case TODO_ACTIONS.COMPLETE_TODO:
      return completeTodo(state, action.payload);
    case TODO_ACTIONS.ADD_TODO:
      return addTodo(state, action.payload);
    case TODO_ACTIONS.DELETE_TODO:
      return deleteTodo(state, action.payload);
    case TODO_ACTIONS.EDIT_TODO:
      return editTodo(state, action.payload);
  }
};
