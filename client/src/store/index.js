import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import books from "./slices/books";
import cart from "./slices/cart";
import user from "./slices/auth";
import reviews from "./slices/reviews";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    books: books,
    cart: cart,
    user: user,
    reviews: reviews,
  },
});
