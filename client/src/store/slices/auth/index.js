import { createSlice } from "@reduxjs/toolkit";

const USER = "user";

let initialState = {
  user: null,
};

const localStorageUser = localStorage.getItem(USER);
localStorageUser && (initialState = JSON.parse(localStorageUser));

export const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    postUser: (state, action) => {
      const user = action.payload;
      if (!localStorageUser) {
        localStorage.setItem(USER, JSON.stringify(user));
        state.user = user;
        window.location.replace("/");
      } else {
        state.user = localStorageUser;
      }
    },
    logoutUser: (state) => {
      localStorage.removeItem(USER);
      state.user = null;
    },
  },
});

export const { postUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
