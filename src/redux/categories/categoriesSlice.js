import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.categories = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, handleFulfilled)
      .addCase(fetchCategories.rejected, handleRejected);
  },
});

export const categoriesReducer = categoriesSlice.reducer;
