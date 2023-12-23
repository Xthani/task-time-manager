import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
