import { TODO_ACTIONS } from "../actions/todoAction";

const completeTodo = (state, id) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};


//Controller View
export  const TodoController = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODOS:
      return [...action.payload];
    case TODO_ACTIONS.COMPLETE_TODO:
      return completeTodo(state, action.payload);
  }
};
