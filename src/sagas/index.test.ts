import assert from "assert";
import { loadToDosSaga, saveToDosSaga } from "sagas";
import apis from "apis";
import { call, select } from "@redux-saga/core/effects";
import { loadToDosError, loadToDosSuccess } from "reducers/todos";
import { put } from "redux-saga/effects";
import { toDoSelector } from "selectors";

describe("loadToDosSaga", () => {
  test("loadToDosSaga without error", () => {
    const gen = loadToDosSaga();
    assert.deepStrictEqual(
      gen.next().value,
      call(apis.loadToDos),
      "Load ToDos from storage"
    );

    assert.deepStrictEqual(
      gen.next([]).value,
      put(loadToDosSuccess([])),
      "should loadToDoSuccess"
    );
  });

  test("loadToDosSaga with error", () => {
    const gen = loadToDosSaga();
    assert.deepStrictEqual(
      gen.next().value,
      call(apis.loadToDos),
      "should call api to load the data"
    );

    assert.deepStrictEqual(
      gen.throw("").value,
      put(loadToDosError()),
      "should loadToDoError"
    );
  });
});

describe("saveToDosSaga", () => {
  test("saveToDosSaga without error", () => {
    const gen = saveToDosSaga();
    assert.deepStrictEqual(
      gen.next().value,
      select(toDoSelector),
      "Should use selector to get the data"
    );
    assert.deepStrictEqual(
      gen.next({ todos: [] }).value,
      call(apis.saveToDos, []),
      "Should call api to save the data"
    );
  });
});
