import { RootState } from "../index";

export const selectTasks = (state: RootState) => state.task.tasks;
