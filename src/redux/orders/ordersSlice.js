import { createSlice} from "@reduxjs/toolkit";
import { createOrder, getMyOrders } from "./operations";

const handleGetMyOrdersPending = (state) => {
  state.isLoading = true;
}

const handleGetMyOrdersFulfilled = (state, action) => {
  // state.customer = action.payload.customer;
  // state.orderRecords = action.payload.orderRecords;
  state.myOrders = action.payload;
  state.isLoading = false;
  state.error = "";
}

const handleGetMyOrdersRejected = (state, action) => {
  state.isLoading = false;
   state.error = action.payload;
}

const initialState = {
  customer: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    deliveryAddress:''
  },
  orderRecords: [],
  myOrders:[],
  isLoading: false,
   error: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, ((state, action) =>{
        state.customer = action.payload.customer
      state.orderRecords = action.payload.orderRecords}))
      .addCase(getMyOrders.pending, handleGetMyOrdersPending)
      .addCase(getMyOrders.fulfilled, handleGetMyOrdersFulfilled)
    .addCase(getMyOrders.rejected, handleGetMyOrdersRejected)
  },
  
});

export const ordersReducer = ordersSlice.reducer;
