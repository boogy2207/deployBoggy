import { createSlice } from "@reduxjs/toolkit";
import searchTransform from "../../../helpers/searchTransform";

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
<<<<<<< HEAD
=======

>>>>>>> 99f01fff532377507eb089a58df0a3511c3ab6d9

      const searchBook = searchTransform(action.payload)
      
      state.books = searchBook;
      state.allBookys = searchBook;
   },
    price: (state, action) => {
      let ordenSort;
      let Free
      
<<<<<<< HEAD
=======

>>>>>>> 99f01fff532377507eb089a58df0a3511c3ab6d9
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
<<<<<<< HEAD
=======

>>>>>>> 99f01fff532377507eb089a58df0a3511c3ab6d9
        Free = state.books.filter(e => e.price === 'Free Book' )
        const noFree = state.books.filter(e => e.price !== 'Free Book' )

        ordenSort = noFree.sort((a, b) => {
            if (parseInt(a.price) < parseInt(b.price)) return 1;
            if (parseInt(a.price) > parseInt(b.price)) return -1;
            return 0;
          });
          
          ordenSort = ordenSort.concat(Free)
        }
<<<<<<< HEAD
=======

>>>>>>> 99f01fff532377507eb089a58df0a3511c3ab6d9

      if (action.payload === "DESC") {
        Free = state.books.filter(e => e.price === 'Free Book' )
        const noFree = state.books.filter(e => e.price !== 'Free Book' )

        ordenSort = noFree.sort((a, b) => {
          if (parseInt(a.price) > parseInt(b.price)) return 1;
          if (parseInt(a.price) < parseInt(b.price)) return -1;
          return 0;
        });

        ordenSort = Free.concat(ordenSort)
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
