import { configureStore } from "@reduxjs/toolkit";
// import { Productlistslice} from "./Products/Productlistslice";
import { ProductPriceFilterSlice } from "./Products/ProductPriceFilterSlice";
import { PdpPageSlice } from "./Products/PdpPageSlice";
import { CreateCartSlice } from "./Cart/CreateCart";
import { GuestCartSlice } from "./Cart/GuestCart";
import { AddToCartSlice } from "./Cart/AddtoCart";
import { DeleteFromCartSlice } from "./Cart/DeleteFromCart";

export const Store= configureStore({
    reducer:{
        // products:Productlistslice.reducer,  not using this as by default we are taking product filter value
        productsfilter:ProductPriceFilterSlice.reducer,
        pdppage:PdpPageSlice.reducer,
        createEmptyCart:CreateCartSlice.reducer,
        addToCart:AddToCartSlice.reducer,
        guestCartData:GuestCartSlice.reducer,
        deleteCartData:DeleteFromCartSlice.reducer
    }
})