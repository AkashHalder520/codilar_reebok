
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CustomerCart from "../../GraphQl/CustomerCart";




export const customercart = createAsyncThunk(
  "Customer_cart",
  async () => {
    try {
      const data = await CustomerCart();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)

const initialState = {
  status: '',
  CustomerCartData: null,
  errorMessage: ''
};

export const CustomerCartSlice = createSlice({
  name: "Customer_cart",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(customercart.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage=""
    })
      .addCase(customercart.fulfilled, (state, action) => {
        state.status = 'fullfilled'
        console.log("customercartrespond",action.payload); 
        localStorage.setItem("CustomerCartId",action.payload?.data?.customerCart?.id)
        state.CustomerCartData=action.payload?.data?.customerCart
        state.errorMessage="";
      })
      .addCase(customercart.rejected, (state, action) => {
        state.status = 'rejected'
        state.errorMessage="Failed to fetch data from server please come back after some time"
      })
  }


})
export const{}= CustomerCartSlice.actions