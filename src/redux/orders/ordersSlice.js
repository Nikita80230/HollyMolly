import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    
      
  },
});

export const ordersReducer = ordersSlice.reducer;
