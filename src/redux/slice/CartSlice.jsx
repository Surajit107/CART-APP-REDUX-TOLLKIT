import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "name",
    initialState: {
        cartData: [],
        subtotal: 0,
        total: 0
    },
    reducers: {
        addItem(state, action) {
            state.cartData.push(action.payload)
        },
        removeItem(state, action) {
            state.cartData = state.cartData.filter((item) => item.id !== action.payload)
        },
        // IncItems(state, action) {
        //     return state.filter((item) => {
        //         if (item.id === action.payload) {
        //             return (item.length + 1)
        //         }
        //         console.log(item);
        //         return item.length
        //     })
        // },
        // DecItems(state, action) {
        //     return state.filter((item) => {
        //         if (item.id === action.payload && item.length > 1) {
        //             return (item.length - 1)
        //         }
        //         return item.length
        //     })
        // }
    }
})

export const { addItem, removeItem, IncrementItems, DecrementItems } = CartSlice.actions 