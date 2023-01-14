import { createSlice } from "@reduxjs/toolkit";

const USER = "user";

const initialState = {
  user: {},
};

const localStorageUser = localStorage.getItem(USER);

export const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    postUser: (state, action) => {
      const user = action.payload;
      console.log(user);
      if (!localStorageUser) {
        localStorage.setItem(USER, JSON.stringify(user));
        state.user = user;
      } else {
        state.user = localStorageUser;
      }
    },
  },
});

export const { postUser } = authSlice.actions;

export default authSlice.reducer;
