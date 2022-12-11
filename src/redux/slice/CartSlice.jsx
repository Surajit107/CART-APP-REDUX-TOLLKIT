import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const CartSlice = createSlice({
    name: "name",
    initialState: {
        cartData: [],
        shippingCost: 0,
        total: 0
    },
    reducers: {
        addItem(state, action) {
            const itemIndex = state.cartData.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                toast.info("Item Is Already Added To The Cart", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                state.cartData.push(action.payload)
            }
        },
        removeItem(state, action) {
            state.cartData = state.cartData.filter((item) => item.id !== action.payload.id)
        },
        IncItems(state, action) {
            const newData = state.cartData.map((item) => {
                if (item.id === action.payload) {
                    let newQuantity = item.quantity + 1
                    return {
                        ...item,
                        quantity: newQuantity
                    }
                }
                return item
            })
            return {
                ...state,
                cartData: newData
            }
        },
        DecItems(state, action) {
            const newData = state.cartData.map((item) => {
                if (item.id === action.payload) {
                    let newQuantity = item.quantity - 1
                    if (newQuantity < 1) {
                        newQuantity = 1
                    }
                    return {
                        ...item,
                        quantity: newQuantity
                    }
                }
                return item
            })
            return {
                ...state,
                cartData: newData
            }
        },
        TotalPrice(state) {
            let amount = 0
            let shipping = 0
            state.cartData.map((item) => {
                if ((Number(item.quantity) * Number(item.price)) <= 2500) {
                    shipping += 250
                } else {
                    amount += (Number(item.quantity) * Number(item.price))
                    shipping = 0
                }
                return amount
            })
            return {
                ...state,
                shippingCost: shipping,
                total: (amount + shipping)
            }
        },
        EmptyCart(state) {
            return {
                ...state,
                cartData: []
            }
        }
    }
})

export const { addItem, removeItem, IncItems, DecItems, TotalPrice, EmptyCart } = CartSlice.actions 