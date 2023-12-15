import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GuestCartData from "../../GraphQl/GuestCartData";

export const guestcart = createAsyncThunk(
    "guest_cart_data",
    async (props) => {
      console.log("guestcart",props);
      try {
        const data = await GuestCartData(props);
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
  
  export const GuestCartSlice = createSlice({
    name: "Guest_card_data",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(guestcart.pending, (state, action) => {
        state.status = 'loading'
        state.errorMessage=""
      })
        .addCase(guestcart.fulfilled, (state, action) => {
          state.status = 'fullfilled'
          state.guestCartData = action.payload.cart;
          console.log("Guest cart data",action.payload);
          state.errorMessage="";
        })
        .addCase(guestcart.rejected, (state, action) => {
          state.status = 'rejected'
          state.errorMessage="Failed to fetch data from server please come back after some time"
        })
    }
  
  
  })
  export const{}= GuestCartSlice.actions