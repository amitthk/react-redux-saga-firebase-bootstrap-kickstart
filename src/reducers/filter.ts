import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "types";

export const initialState: FilterState = {
  showOption: "all",
  filter: "",
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setShowOption: (
      state,
      { payload }: PayloadAction<typeof initialState.showOption>
    ) => {
      state.showOption = payload;
    },
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
  },
});

export const { setShowOption, setFilter } = filter.actions;
export default filter.reducer;
