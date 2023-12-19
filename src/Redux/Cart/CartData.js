import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartData from "../../GraphQl/CartData";

export const cartdata = createAsyncThunk(
    "cart_data",
    async (props) => {
      console.log("guestcart",props);
      try {
        const data = await CartData(props);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  )
  
  const initialState = {
    status: '',
    guestCartData: [],
    errorMessage: ''
  };
  
  export const CartDataSlice = createSlice({
    name: "cart_data",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(cartdata.pending, (state, action) => {
        state.status = 'loading'
        state.errorMessage=""
      })
        .addCase(cartdata.fulfilled, (state, action) => {
          state.status = 'fullfilled'
          state.guestCartData = action.payload.cart;
          console.log("cart data",action.payload);
          state.errorMessage="";
        })
        .addCase(cartdata.rejected, (state, action) => {
          state.status = 'rejected'
          state.errorMessage="Failed to fetch data from server please come back after some time"
        })
    }
  
  
  })
  export const{}= CartDataSlice.actions