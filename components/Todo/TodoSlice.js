import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  list: [],
  editing: null,
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,

  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload.dataname;
    },

    addTodo: (state, action) => {
      const showtodos = {
        id: new Date(),
        ischecked: false,
        data: state.value,
      };
      state.list.push(showtodos);
      state.value = " ";
      console.log(action);
    },

    resetTodo: () => {
      return initialState;
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(
        (todos) => todos.id !== action.payload.newid
      );
    },
    checkboxTodo: (state, action) => {
      state.list = state.list.map((todos) =>
        todos.id === action.payload
          ? { ...todos, ischecked: !todos.ischecked }
          : { ...todos }
      );
    },
    editingTodo: (state, action) => {
      state.editing = action.payload;
      const editingdata = state.list.find(
        (element) => element.id === action.payload
      );
      state.value = editingdata.data;
    },

    submitEditing: (state, action) => {
      state.list = state.list.map((edittodos) =>
        edittodos.id === state.editing
          ? { ...edittodos, data: action.payload }
          : { ...edittodos }
      );
      state.editing = null;
      state.value = " ";
    },
  },
});

export const {
  setInputValue,
  addTodo,
  resetTodo,
  deleteTodo,
  checkboxTodo,
  editingTodo,
  submitEditing,
} = TodoSlice.actions;

export default TodoSlice.reducer;
