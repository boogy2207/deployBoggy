import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    allBookys: [],
  },
  reducers: {
    getAllBooks: (state, action) => {
      state.books = action.payload;
      state.allBookys = action.payload;
    },
    getBooksByTitle: (state, action) => {
      state.books = action.payload;
      state.allBookys = action.payload;
   },
    price: (state, action) => {
      let ordenSort;
      
      if (action.payload === "A-Z") {
        ordenSort = state.books.sort((a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
          });
        }
        
      if (action.payload === "Z-A") {
        ordenSort = state.books.sort((a, b) => {
            if (a.title < b.title) return 1;
            if (a.title > b.title) return -1;
            return 0;
          });
        }
      if (action.payload === "ASC") {
        ordenSort = state.books.sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          });
        }

      if (action.payload === "DESC") {
        ordenSort = state.books.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
      }

      state.books = ordenSort;
    },
    filter: (state, action) => {
      if (action.payload === "ALL") {
        state.books = state.allBookys.filter((e) => e);
      } else {
        const filterGenres = state.allBookys.filter(
          (e) => action.payload === e.category
        );
        state.books = filterGenres;
      }
    },
    rangePrice: (state, action) => {

      if(parseInt(action.payload) === 0) {
        state.books = state.allBookys.filter(e => e.price === 'Free Book')
      }
      else{
        state.books = state.allBookys.filter(e => Math.ceil(e.price) < action.payload)
      }
    }
  },
});

export const { getAllBooks, price, filter,rangePrice, getBooksByTitle } = bookSlice.actions;

export default bookSlice.reducer;
