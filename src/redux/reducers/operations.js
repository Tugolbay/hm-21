import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState = [
  { id: 1, todo: "CocoCola", completed: false },
  { id: 2, todo: "fruits", completed: true },
  { id: 3, todo: "cookie", completed: false },
];

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;

    default:
      return state;
  }
};
