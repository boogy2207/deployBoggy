import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import books from "./slices/books";
import cart from "./slices/cart";
import user from "./slices/auth";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    books: books,
    cart: cart,
    user: user,
  },
});
