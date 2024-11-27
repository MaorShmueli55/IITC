import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
        const todoClick = state.todo.find((todo) =>
            todo.id === action.payload)
        todoClick.completed = !todoClick.completed
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
