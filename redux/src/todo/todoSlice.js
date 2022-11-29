import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/*
Pending
Fulfiled
Reject
*/

export const fetchAllTodos = createAsyncThunk("todo/fetchAllTodos", async ({id, name},_) => {

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  return todos;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: true,
    error : '',
    todos: [
      {
        title: "First Todo",
        id: "1",
        completed: false,
      },
      {
        title: "Eat breakfast",
        id: "2",
        completed: true,
      },
    ],
  },

  reducers: {
    addTodos: (state, { _, payload }) => {

      return [...state, {todos : payload}];
    },

   
    completeTodos: (state, { _, payload }) => {
       const todos = state.todos;
      const mappedTodos =  todos.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {...state, todos : mappedTodos}
    },
  },

  extraReducers: {
    [fetchAllTodos.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllTodos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = payload;
    },
    [fetchAllTodos.rejected] : (state, {error}) => {
        state.error = error
    }
  },
});

export const { addTodos, completeTodos } = todoSlice.actions;
export default todoSlice.reducer;
