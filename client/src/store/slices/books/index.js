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

      const booksFree = state.allBookys.filter(e =>  e.price === 'Free Book')

      if(action.payload.minPrice === 0){
        
        const bookPrice = state.allBookys.filter(e =>  parseInt(e.price) >= action.payload.minPrice && parseInt(e.price) <= action.payload.maxPrice)
        state.books = bookPrice.concat(booksFree)
      }else{
        const bookPrice = state.allBookys.filter(e =>  parseInt(e.price) >= action.payload.minPrice && parseInt(e.price) <= action.payload.maxPrice)
        state.books = bookPrice
      }

    }
  },
});

export const { getAllBooks, price, filter, rangePrice, getBooksByTitle } =
  bookSlice.actions;

export default bookSlice.reducer;
