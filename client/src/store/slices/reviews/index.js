import { createSlice } from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: []
  },
  reducers: {
    getAllReviews: (state, action) => {
      state.reviews = action.payload;
    }
  },
});

export const { getAllReviews } =
reviewsSlice.actions;

export default reviewsSlice.reducer;
