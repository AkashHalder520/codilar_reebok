import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PlpQuery from '../../GraphQl/PlpQuery';




const initialState = {
  productsData: [],
  status: '',
  errorMessage: "",
  
};


export const ProductPriceFilter = createAsyncThunk(
  "poduct_display based on filter",

  async ({ priceRange, category_type }) => {
    console.log("prcefilter slice",priceRange,category_type);
    

    try {
      const data = await PlpQuery(priceRange,category_type);
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
          // state.errorMessage = action.error.message;
          state.errorMessage="Error in fetching Data from API , Please try again after some time"
        });
  },
});

export const { } = ProductPriceFilterSlice.actions;