import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../ApiService";

const initialState = {
  userList: [],
  loading: false,
  errorMessage: "",
};

export const fetchuserAsync = createAsyncThunk(
  "User/fetchUser", async () => {
  const response = await Api.fetchusers();
  return response;
});

export const UserSlice = createSlice({
  name: "User",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchuserAsync.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(fetchuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(fetchuserAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "something went wrong";
      });
  },
});

export default UserSlice.reducer;
