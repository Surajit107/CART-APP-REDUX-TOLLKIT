import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products", async () => {
    try {
        const res = await axios.get("http://localhost:3001/products")
        const result = res?.data
        return result;
    } catch (error) {
        console.log(error)
    }
})

export const ProductSlice = createSlice({
    name: "productslice",
    initialState: {
        products: [],
        status: "idle",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Loading..."
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "Resolved"
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "Failed"
                state.loading = false
            })
    }
})