import { createSlice } from "@reduxjs/toolkit";

const CART = "cart";
const COUNT = "count";
const SUBTOTAL = "subTotal";

const initialState = {
  cart: [],
  count: 0,
  subTotal: 0,
};

let getLocalStorageCart = JSON.parse(localStorage.getItem(CART));
let getLocalStorageCount = JSON.parse(localStorage.getItem(COUNT));
let getLocalStorageSubTotal = JSON.parse(localStorage.getItem(SUBTOTAL));

getLocalStorageCart && (initialState.cart = getLocalStorageCart);
getLocalStorageCount && (initialState.count = getLocalStorageCount);
getLocalStorageSubTotal && (initialState.subTotal = getLocalStorageSubTotal);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        title,
        price,
        authors,
        category,
        imagelink,
        language,
        pagecount,
        quantity = 1,
      } = action.payload;
      const item = {
        id,
        title,
        price,
        quantity,
        authors,
        category,
        imagelink,
        language,
        pagecount,
      };
      if (state.cart.some((item) => item.id === id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            item.quantity += 1;
          }
          return item;
        });
        localStorage.setItem(CART, JSON.stringify(state.cart));
      } else {
        localStorage.setItem(CART, JSON.stringify([...state.cart, item]));
        state.cart = [...state.cart, item];
      }
      state.count++;
      localStorage.setItem(COUNT, state.count);
      if (!isNaN(Number(price))) {
        state.subTotal += Number(price);
        localStorage.setItem(SUBTOTAL, state.subTotal);
      }
    },
    removeItemFromCart: (state, action) => {
      const { id, price } = action.payload;
      if (state.cart.some((item) => item.id === id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            item.quantity -= 1;
          }
          return item;
        });
        localStorage.setItem(CART, JSON.stringify(state.cart));
      } else {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
      state.count--;
      localStorage.setItem(COUNT, state.count);
      if (!isNaN(Number(price))) {
        state.subTotal -= Number(price);
        localStorage.setItem(SUBTOTAL, state.subTotal);
      }
    },
    deleteBookFromCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      if (state.cart.some((item) => item.id === id)) {
        state.cart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem(CART, JSON.stringify(state.cart));
      }
      state.count -= quantity;
      localStorage.setItem(COUNT, state.count);
      if (!isNaN(Number(price))) {
        state.subTotal -= Number(price) * quantity;
        localStorage.setItem(SUBTOTAL, state.subTotal);
      }
    },
  },
});

export const { addToCart, removeItemFromCart, deleteBookFromCart } = cartSlice.actions;

export default cartSlice.reducer;
