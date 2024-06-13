export const getMyOrders = createAsyncThunk(
  "orders/getMyOrders",
  async (_, thunkAPI) => {
    
    try {
      
      const res = await axios.get("/api/Orders/myOrders");

      console.log( res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (_, thunkAPI) => {
    
    try {
      
      const res = await axios.post("/api/Orders");

      console.log( res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);