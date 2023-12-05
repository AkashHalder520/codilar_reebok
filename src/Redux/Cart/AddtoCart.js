import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AddConfProductToCart from "../../GraphQl/AddConfProductToCart";

export const addtocart = createAsyncThunk(
    "Add_To_cart",
    async (props) => {
        console.log("reduxprops",props);
      try {
        const data = await AddConfProductToCart(props);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  )
  
  const initialState = {
    status: '',
    responseData: '',
    errorMessage: ''
  };
  
  export const AddToCartSlice = createSlice({
    name: "Add_to_cart",
    initialState,
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder.addCase(addtocart.pending, (state, action) => {
        state.status = 'loading'
        state.errorMessage=""
      })
        .addCase(addtocart.fulfilled, (state, action) => {
          state.status = 'fullfilled'
          state.responseData= action.payload;
          // console.log(action.payload);
          state.errorMessage="";
        })
        .addCase(addtocart.rejected, (state, action) => {
          state.status = 'rejected'
          state.errorMessage="Failed to fetch data from server please come back after some time"
        })
    }
  
  
  })
  export const{}= AddToCartSlice.actions