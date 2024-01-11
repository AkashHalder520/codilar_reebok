import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const Query = `{
    products(search: "", pageSize: 100) {
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
}`;

const initialState = {
  productsData: [],
  status: '',
  errorMessage: "",
}



export const productlist = createAsyncThunk(
  "Ecom_productlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: Query }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      // If an error occurs, the promise is rejected, and the rejected state will be executed.
      return rejectWithValue(error);
    }
  }
);

export const Productlistslice = createSlice({
  name: "productlist_ecom",
  initialState,
  reducers :{

  },

  extraReducers: (builder) => {
    builder.addCase(productlist.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage=""
    })
      .addCase(productlist.fulfilled, (state, action) => {
        state.status = 'fullfilled'
        state.productsData = action.payload;
        state.errorMessage=""
      })
      .addCase(productlist.rejected, (state, action) => {
        state.status = 'rejected'
        console.log(action)
        // state.errorMessage=action.error.message;
        state.errorMessage="Unable to fetch Data from server"
      })
  }
})

export const{}= Productlistslice.actions