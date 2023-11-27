import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceRange: [0, 100],
};



export const ProductPriceFilterSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setPriceRangeRedux : (state, action) => {
      state.priceRange = action.payload;
      console.log("Reducer initial",action.payload[0],"Reducer Final",action.payload[1]);
    },
  },
});

export const { setPriceRangeRedux } = ProductPriceFilterSlice.actions;