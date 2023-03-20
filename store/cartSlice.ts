import { createSlice } from "@reduxjs/toolkit";
import  CartItem  from "../types/cartItem";

export interface CartState {

    items:Array<CartItem>,
    identifier:string,
    totalAmount:Number
}

const initialState: CartState = {
    items:[],
    identifier:'',
    totalAmount:0
};

// Actual Slice
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initCartState(state,action){
            state.identifier=action.payload.cart_identifier;
        },
        setCartState(state,action){
            state.items=action.payload.items;
            state.identifier=action.payload.cart_identifier;
            state.totalAmount=action.payload.totalAmount;
        }
    }
})



export const { setCartState,initCartState } = cartSlice.actions;

export const selectCartState = (state: {cart: CartState } ) => state.cart;

export default cartSlice.reducer;