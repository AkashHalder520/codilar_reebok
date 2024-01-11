import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CreateNewCustomer from "../../GraphQl/CreateNewCustomer"

const initialState={
    responseData:"",
    status:"",
    errorMessage:"",
    redirectToLogin: "",
}
export const createnewcustomer =createAsyncThunk(
    "register_new_customer",
    async(formdata)=>{
        console.log("slicepage",formdata);
        try{
            const data=await CreateNewCustomer(formdata);

            return data
        }
        catch(error){
            console.error('Error fetching data:', error);
        throw error;
        }
    }
)

export const RegistrationSlice=createSlice({
    name:"customer_Registration_slice",
    initialState,
    reducers:{
        resetRedirect:(state, { payload }) => {
            // Avoid mutating the state directly, create a new object
            
            return {
              ...state,
              redirectToLogin: "",
            };
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createnewcustomer.pending, (state, action) => {
            state.status = 'loading'
            state.errorMessage=""
          })
            .addCase(createnewcustomer.fulfilled, (state, action) => {
              state.status = 'fullfilled'
              console.log("response",action.payload);
              state.responseData = action.payload;
             
              if (action.payload?.errors) {
                
                state.errorMessage = action.payload?.errors[0]?.message
                console.log("slicestate", state.errorMessage);
              } 
              else{
                state.redirectToLogin='/Login'
              }
  
            })
            .addCase(createnewcustomer.rejected, (state, action) => {
              state.status = 'rejected'
              state.errorMessage="Failed to fetch data from server please come back after some time"
            })
    }
})
export const{resetRedirect}=RegistrationSlice.actions