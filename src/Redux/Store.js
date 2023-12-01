import { configureStore } from "@reduxjs/toolkit";
// import { Productlistslice} from "./Products/Productlistslice";
import { ProductPriceFilterSlice } from "./Products/ProductPriceFilterSlice";
import { PdpPageSlice } from "./Products/PdpPageSlice";

export const Store= configureStore({
    reducer:{
        // products:Productlistslice.reducer,   not using this as by default we are taking product filter value
        productsfilter:ProductPriceFilterSlice.reducer,
        pdppage:PdpPageSlice.reducer
    }
})