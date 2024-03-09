import { combineReducers } from "redux";
import { RootState } from "types";
import filter from "./filter";
import todos from "./todos";

const rootReducer = combineReducers<RootState>({
  todo: todos,
  filter: filter,
});

export default rootReducer;
