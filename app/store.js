import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../components/Todo/TodoSlice";
import UserReducer from "../components/User/UserSlice";
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    users: UserReducer,
  },
});