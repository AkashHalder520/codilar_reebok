import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CreateCartMutation from "../../GraphQl/CreateCartMutation";



export const createcart = createAsyncThunk(
  "create_empty_cart",
  async () => {
    try {
      const data = await CreateCartMutation();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)
const initialState = {
  status: '',
  guestcartId: '',
  errorMessage: ''
};

export const CreateCartSlice = createSlice({
  name: "create_Empty_cart",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(createcart.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage=""
    })
      .addCase(createcart.fulfilled, (state, action) => {
        state.status = 'fullfilled'
        // state.cartId = action.payload;
        localStorage.setItem('cartId', action.payload);
        console.log("cartid create slice",action.payload);
        state.errorMessage="";
      })
      .addCase(createcart.rejected, (state, action) => {
        state.status = 'rejected'
        state.errorMessage="Failed to fetch data from server please come back after some time"
      })
  }


})
export const{}= CreateCartSlice.actions