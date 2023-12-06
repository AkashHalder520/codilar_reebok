import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DeleteConfProductCart from "../../GraphQl/DeleteConfProductCart";

export const  deletefromcart= createAsyncThunk(
    "remove item from cart",
    async(props)=>{
        console.log("remove cart props",props);
        try{
            const data=await DeleteConfProductCart(props)
            return data;
        }catch(error){
            console.error('Error fetching data',error);
        }
    }
)
const initialState={
    status:'',
    response:'',
    errorMessage:'',
};

export const DeleteFromCartSlice=createSlice({
    name:"Delete_product_from_cart slice",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(deletefromcart.pending,(state,action)=>{
            state.status= 'loading'
            state.errorMessage=""
        })
        .addCase(deletefromcart.fulfilled, (state, action) => {
            state.status = 'fullfilled'
            state.response= action.payload;
            // console.log(action.payload);
            state.errorMessage="";
          })
          .addCase(deletefromcart.rejected, (state, action) => {
            state.status = 'rejected'
            state.errorMessage="Failed to fetch data from server please come back after some time"
          })
    }
})
export const{}=DeleteFromCartSlice.actions