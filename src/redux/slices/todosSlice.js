import { createSlice } from "@reduxjs/toolkit";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
const todosSlice = createSlice({
  name: "todos",
  initialState: initialTasks,
  reducers: {
    added: (state, action) => {
      return [
        ...state,
        {
          id: action.payload,
          text: action.payload,
          done: false,
        },
      ];
    },
    changed: (state, action) => {
      return state.map((e) => {
        if (e.id === action.payload.id) {
          return action.payload;
        } else {
          return e;
        }
      });
    },
    deleted: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { added, changed, deleted } = todosSlice.actions;
export default todosSlice.reducer;
