export const todoReducer = (state, action) => {
  switch (action.type) {
    case "added":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return state.map((e) => {
        if (e.id === action.task.id) {
          return action.task;
        } else {
          return e;
        }
      });
    case "deleted":
      return state.filter((e) => e.id !== action.id);
    default:
      throw Error("Unknown action: " + action.type);
  }
};
