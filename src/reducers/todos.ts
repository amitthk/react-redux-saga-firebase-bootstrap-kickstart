import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "apis";
import { ToDo, ToDosState } from "types";
import { v4 } from "uuid";

export const initialState: ToDosState = {
  todos: [],
};

const toDos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, { payload }: PayloadAction<string>) => {
      //state.todos.push({ id, todo: payload, completed: false });
    },
    deleteToDo: (state, { payload }: PayloadAction<string>) => {
      //state.todos = state.todos.filter((item) => item.id !== payload);
    },
    deleteTodoSuccess: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
    deleteTodoError: (state, error) => {
      // Handle error
      console.log("Error deleting todos", error);
    },
    toggleToDo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );
    },
    loadToDos: (state) => initialState,
    loadToDosSuccess: (state, { payload }: PayloadAction<ToDo[]>) => {
      state.todos = payload;
    },
    loadToDosError: (state) => initialState,
    saveToDo: (state, { payload }: PayloadAction<ToDo>) => {
      state.todos.push(payload);
    },
    saveToDoSuccess: (state, { payload }: PayloadAction<ToDo>) => {
      state.todos.push(payload);
    },
    saveToDoError: (state, error) => {
      // Handle error
      console.log("Error saving todos", error);
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  deleteTodoError,
  deleteTodoSuccess,
  toggleToDo,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDo,
  saveToDoError,
  saveToDoSuccess,
} = toDos.actions;
export default toDos.reducer;
