import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


  const initialState = {
    pdpData: [],
    status: '',
    errorMessage: "",
  }

  export const pdp_page = createAsyncThunk(
    "pdp_fetch_by_urlkey",
    async (url_key) => {
      try {
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              {
                products(search: "", pageSize: 100, filter: { url_key: { eq: "${url_key}" } }) {
                  items {
                    id
                    name
                    sku
                    url_key
                    price {
                      regularPrice {
                        amount {
                          value
                          currency
                        }
                      }
                    }
                    image {
                      url
                    }
                  }
                }
              }
            `,
          }),
        });
        // console.log(response, 'response pdp');
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
          
        }
  
        const data = await response.json();
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