import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CustomerDetailsLoggedin from "../../GraphQl/CustomerDetailsLoggedin";


const initialState={
    CustomerDetailsData:[{}],
    status:"",
    errorMessage:"",
}
export const customerdetails =createAsyncThunk(
    "Get_customer_details",
    async()=>{
        // console.log("slicepage",formdata);
        try{
            const data=await CustomerDetailsLoggedin();
console.log("customer details",data);
            return data
        }
        catch(error){
            console.error('Error fetching data:', error);
        throw error;
        }
    }
)

export const CustomerDetailsLoggedinSlice=createSlice({
    name:"Get_customer_details",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(customerdetails.pending, (state, action) => {
            state.status = 'loading'
            state.errorMessage=""
          })
            .addCase(customerdetails.fulfilled, (state, action) => {
              state.status = 'fullfilled'
              console.log("Customer Details response",action.payload);
              state.CustomerDetailsData = action.payload;
              state.errorMessage=""
            })
            .addCase(customerdetails.rejected, (state, action) => {
              state.status = 'rejected'
              state.errorMessage="Failed to fetch data from server please come back after some time"
            })
    }
})
export const{}=CustomerDetailsLoggedinSlice.actions