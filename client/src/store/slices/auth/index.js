import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const USER = "user";

let initialState = {
  user: null,
  users: null
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
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have been logged out",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("/");
      });
    },
    registerUser: (state, action) => {
      const { success, msg } = action.payload;
      Swal.fire({
        icon: success ? "success" : "error",
        title: success ? "Success" : "Error",
        text: msg,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("/login");
      });
    },
    allUsers: (state, action) => {
      state.users = action.payload;
    }
  },
});

export const { postUser, logoutUser, registerUser, allUsers } = authSlice.actions;

export default authSlice.reducer;
