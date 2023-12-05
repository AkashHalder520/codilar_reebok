

// export const handleCreateCart = async () => {
//   const requestBody = {
//     query: `
//       mutation {
//         createEmptyCart 
//       }
//     `
//   };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CreateCartMutation from "../../GraphQl/CreateCartMutation";


//   try {
//     const response = await fetch('/graphql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Include any necessary headers like authorization tokens here
//       },
//       body: JSON.stringify(requestBody)
//     });

//     const responseData = await response.json();
//     // Assuming your GraphQL response structure matches the expected format
//     // Access the cartId from the response and update the state
//     console.log('response data:',responseData);
//     return responseData?.data?.createEmptyCart;
//   } catch (error) {
//     console.error('Error creating cart:', error);
//     throw error;
//   }
// };

export const createcart = createAsyncThunk(
  "create_empty_cart",
  async () => {
    try {
      const data = await CreateCartMutation();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)

const initialState = {
  status: '',
  cartId: '',
  errorMessage: ''
};

export const CreateCartSlice = createSlice({
  name: "create_Empty_cart",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(createcart.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage=""
    })
      .addCase(createcart.fulfilled, (state, action) => {
        state.status = 'fullfilled'
        state.cartId = action.payload;
        localStorage.setItem('cartId', state.cartId);
        console.log("cartid create slice",action.payload);
        state.errorMessage="";
      })
      .addCase(createcart.rejected, (state, action) => {
        state.status = 'rejected'
        state.errorMessage="Failed to fetch data from server please come back after some time"
      })
  }


})
export const{}= CreateCartSlice.actions