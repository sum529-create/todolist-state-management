import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

const store = configureStore({
  reducer: {
    todo: todosSlice,
  },
});

export default store;
