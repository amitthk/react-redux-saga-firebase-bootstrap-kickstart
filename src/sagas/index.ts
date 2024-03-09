import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { v4 } from "uuid";
import {
  addToDo,
  deleteToDo,
  deleteTodoError,
  deleteTodoSuccess,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDo,
  saveToDoError,
  saveToDoSuccess,
  toggleToDo
} from "reducers/todos";
import api from "apis";
import { RootState, ToDo, ToDosState } from "types";
import { toDoSelector } from "selectors";
import { ToDoAdd } from "container/ToDoAdd";


export function* loadToDosSaga(): any {
  try {
    const todos = yield call(api.loadToDos);
    yield put(loadToDosSuccess(todos));
  } catch {
    yield put(loadToDosError());
  }
}


// Updated to handle the action correctly
export function* saveToDoSaga(action:any): any {
  try {
    const todo: ToDo = action.payload; // Extracting the ToDo payload from the action
    const savedTodo = yield call(api.saveToDo, todo); // Assuming api.saveToDo returns the saved todo
    yield put(saveToDoSuccess(savedTodo)); // Dispatch success action with the saved todo
  } catch (error: any) {
    yield put(saveToDoError(error.toString())); // Dispatch an error action
  }
}

export function* addToDoSaga(action: any): any {
  try {
    const id = v4();
    const newTodo = {id: id, summary: action.payload, completed: false};
    const savedTodo = yield call(api.saveToDo, newTodo);
    yield put(loadToDos());
  } catch (error: any) {
    yield put(saveToDoError(error.toString()));
  }
}


export function* dataChangedSaga(action: any): any {
  try {
    const todo: ToDo = action.payload; // Extracting the ToDo payload from the action
    const savedTodo = yield call(api.saveToDo, todo); // Assuming api.saveToDo returns the saved todo
    yield put(saveToDoSuccess(savedTodo)); // Dispatch success action with the saved todo
  } catch (error: any) {
    yield put(saveToDoError(error.toString())); // Dispatch an error action
  }
}

export function* deleteToDoSaga(action: any): any {
  try {
    const id = action.payload;
    const delitm = yield call(api.deleteToDo, id);
    yield put(deleteTodoSuccess(delitm));
  } catch (error: any) {
    yield put(deleteTodoError(error.toString()));
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(loadToDos, loadToDosSaga),
    takeLatest(saveToDo, saveToDoSaga),
    takeLatest(deleteToDo, deleteToDoSaga),
    takeLatest(addToDo, addToDoSaga),
    takeLatest(toggleToDo, dataChangedSaga),
  ]);
}