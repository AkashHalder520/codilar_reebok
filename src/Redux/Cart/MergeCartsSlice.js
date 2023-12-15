
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MergeCartsMutation from "../../GraphQl/MergeCartsMutation";


export const mergecarts = createAsyncThunk(
  "Merge_cart",
  async () => {
    try {
      const data = await MergeCartsMutation();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)

const initialState = {
  status: '',
  CustomerCartId: '',
  errorMessage: ''
};

export const MergeCartSlice = createSlice({
  name: "Customer_cart",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(mergecarts.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage=""
    })
      .addCase(mergecarts.fulfilled, (state, action) => {
        state.status = 'fullfilled'
       
        state.errorMessage="";
      })
      .addCase(mergecarts.rejected, (state, action) => {
        state.status = 'rejected'
        state.errorMessage="Failed to fetch data from server please come back after some time"
      })
  }


})
export const{}= MergeCartSlice.actions