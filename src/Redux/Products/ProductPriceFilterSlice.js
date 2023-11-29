import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




const initialState = {
  productsData: [],
  status: '',
  errorMessage: "",
  
};


export const ProductPriceFilter = createAsyncThunk(
  "poduct_display based on filter",

  async (priceRange) => {
    console.log("prcefilter slice",priceRange);
    

    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query {
            products(
              filter: {
                price: {
                  from: "${priceRange[0]}"
                  to: "${priceRange[1]}"
                }
              }
              pageSize: 200
            ) {
              items {
                id
                name
                sku
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





export const ProductPriceFilterSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(ProductPriceFilter.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(ProductPriceFilter.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.productsData = action.payload;
          console.log("Data slice ",action.payload);
        })
        .addCase(ProductPriceFilter.rejected, (state, action) => {
          state.status = 'failed';
          state.errorMessage = action.error.message;
        });
  },
});

export const { } = ProductPriceFilterSlice.actions;