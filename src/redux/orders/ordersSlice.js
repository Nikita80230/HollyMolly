import { createSlice} from "@reduxjs/toolkit";
import { createOrder } from "./operations";

const initialState = {
  customer: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    deliveryAddress:''
  },
  orderRecords:[]
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, ((state, action) =>{
        state.customer = action.payload.customer
      state.orderRecords = action.payload.orderRecords}))
      
  },
});

export const ordersReducer = ordersSlice.reducer;
