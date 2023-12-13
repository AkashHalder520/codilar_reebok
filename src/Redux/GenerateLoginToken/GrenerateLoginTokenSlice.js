import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import GenerateLoginToken from "../../GraphQl/GenerateLoginToken";


const initialState = {
  customerToken: "",
  isLogin: false,
  status: "",
  errorMessage: "",
}
export const generatelogintoken = createAsyncThunk(
  "Geneate_login_token",
  async (formdata) => {
    console.log("slicepage", formdata);
    try {
      const data = await GenerateLoginToken(formdata);

      return data
    }
    catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
)

export const GenerateLoginTokenSlice = createSlice({
  name: "Generate_login_slice",
  initialState,
  reducers: {
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("customerToken");
      console.log("slicetoken", token);
      if (token == "undefined" || token == null) {
        console.log("reducer_loggedin");
        // Avoid mutating the state directly, create a new object
        return {
          ...state,
          isLogin: false,
        };
      } else {
        // Avoid mutating the state directly, create a new object
        return {
          ...state,
          isLogin: true,
        };
      }
    },
    handleLoggedout: (state, { payload }) => {
      // Avoid mutating the state directly, create a new object
      localStorage.removeItem("customerToken")
      return {
        ...state,
        customerToken: "",
        
        isLogin: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generatelogintoken.pending, (state, action) => {
      state.status = 'loading'
      state.errorMessage = ""
    })
      .addCase(generatelogintoken.fulfilled, (state, action) => {
        state.status = 'fullfilled'
        console.log("responselogintoken", action.payload);
        state.customerToken = action.payload?.data?.generateCustomerToken?.token;
        localStorage.setItem("customerToken", action.payload?.data?.generateCustomerToken?.token);

        if (action.payload?.errors) {
          state.isLogin = false;
          state.errorMessage = action.payload?.errors[0]?.message
          console.log("slicestate", state.errorMessage);
        } else {
          state.isLogin = true;
        }


      })
      .addCase(generatelogintoken.rejected, (state, action) => {
        state.status = 'rejected'
        state.errorMessage = "Failed to fetch data from server please come back after some time"
        console.log("error");
      })
  }
})

export const { handleLoggedout, check_token } = GenerateLoginTokenSlice.actions