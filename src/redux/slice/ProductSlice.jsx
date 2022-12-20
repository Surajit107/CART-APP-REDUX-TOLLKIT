import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products", async () => {
    try {
        const res = await axios.get("http://localhost:3001/products")
        return res?.data;
    } catch (error) {
        console.log(error)
    }
})

export const ProductSlice = createSlice({
    name: "productslice",
    initialState: {
        all_products: [],
        status: "idle",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Loading..."
                state.loading = true
                state.all_products = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "Success"
                state.loading = false
                state.all_products = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "Failed"
                state.loading = false
                state.all_products = null
            })
    }
})
