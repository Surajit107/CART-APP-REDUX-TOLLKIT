import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../slice/CartSlice";
import { ProductSlice } from "../slice/ProductSlice";

export const Store = configureStore({
    reducer: {
        productslice: ProductSlice.reducer,
        cart: CartSlice.reducer
    }
})