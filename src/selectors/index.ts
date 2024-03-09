import { RootState } from "types";

export const toDoSelector = (rootState: RootState) => rootState.todo;
export const filterSelector = (rootState: RootState) => rootState.filter;
