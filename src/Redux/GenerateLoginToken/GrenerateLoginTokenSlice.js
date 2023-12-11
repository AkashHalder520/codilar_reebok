import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import GenerateLoginToken from "../../GraphQl/GenerateLoginToken";

const initialState={
    responseData:"",
    status:"",
    errorMessage:"",
}
export const generatelogintoken =createAsyncThunk(
    "Geneate_login_token",
    async(formdata)=>{
        console.log("slicepage",formdata);
        try{
            const data=await GenerateLoginToken(formdata);

            return data
        }
        catch(error){
            console.error('Error fetching data:', error);
        throw error;
        }
    }
)

export const GenerateLoginTokenSlice=createSlice({
        name:"Generate_login_slice",
        initialState,
        reducers:{
    
        },
        extraReducers:(builder)=>{
            builder.addCase(generatelogintoken.pending, (state, action) => {
                state.status = 'loading'
                state.errorMessage=""
              })
                .addCase(generatelogintoken.fulfilled, (state, action) => {
                  state.status = 'fullfilled'
                  console.log("response",action.payload);
                  state.responseData = action.payload;
                  state.errorMessage=""
                })
                .addCase(generatelogintoken.rejected, (state, action) => {
                  state.status = 'rejected'
                  state.errorMessage="Failed to fetch data from server please come back after some time"
                })
        }
    })
    
export const{}=GenerateLoginTokenSlice.actions