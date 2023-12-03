import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PdpFetchQuery from '../../GraphQl/PdpFetchQuery';


  const initialState = {
    pdpData: [],
    status: '',
    errorMessage: "",
  }

  export const pdp_page = createAsyncThunk(
    "pdp_fetch_by_urlkey",
    async (url_key) => {
      try {
        const data = await PdpFetchQuery(url_key);
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  );
  

      export const PdpPageSlice = createSlice({
        name: "PdpData_ecom",
        initialState,
        reducers :{
      
        },
      
        extraReducers: (builder) => {
          builder.addCase(pdp_page.pending, (state, action) => {
            state.status = 'loading'
            state.errorMessage=""
          })
            .addCase(pdp_page.fulfilled, (state, action) => {
              state.status = 'fullfilled'
              state.pdpData = action.payload;
              state.errorMessage=""
            })
            .addCase(pdp_page.rejected, (state, action) => {
              state.status = 'rejected'
              state.errorMessage="Failed to fetch data from server please come back after some time"
            })
        }
      })
      
      export const{}= PdpPageSlice.actions