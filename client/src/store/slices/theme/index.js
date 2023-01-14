import { createSlice } from "@reduxjs/toolkit";

const COLOR = "color";
const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const initialState = {
  color: themeSystem,
};

localStorage.getItem(COLOR) &&
  (initialState.theme = localStorage.getItem(COLOR));

export const themeSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      // const setColor = action.payload === "dark" ? "light" : "dark";
      // localStorage.setItem(COLOR, setColor);
      // return { ...state, [COLOR]: setColor };
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
