import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../models/Cart";

const initCart={...new Cart()}

const CartSlice = createSlice({
    name:"cart",
    initialState:initCart,
    reducers:{
        addProduct(state,actions){
            let idx = state.findIndex(item=>item.product.id===actions.payload.id)
            if(idx>=0){
                state[idx].product=actions.payload;
                state[idx].quantity+=1;
            }
        },
        updateProduct(state,actions){
            let idx = state.findIndex(item=>item.product.id===actions.payload.product.id)
            if(idx>=0){
                state[idx].product=actions.payload.product;
                state[idx].quantity=actions.payload.quantity;
            }
        },
        deleteProduct(state,actions){
            return state.filter(item=>item.product.id!==actions.payload.id)
        }
    }
});

export const SaveCart = async (cart)=>{
    return async (dispatch)=>{
        setTimeout(()=>{

        },1000)
    }
}

export const fetchCart = async ()=>{
    return async (dispatch)=>{
        setTimeout(()=>{

        },1000)
    }
}


export const CartActions = CartSlice.actions;
export default CartSlice.reducer;