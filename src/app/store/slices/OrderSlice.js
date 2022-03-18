import { createSlice } from "@reduxjs/toolkit";
import Order from "../../models/Order";

const initOrder={...new Order()}

const OrderSlice=createSlice({
    name:"order",
    initialState:initOrder,
    reducers:{
        placeOrder(state,actions){
            let order={
                product:actions.payload.product,
                quantity:actions.payload.quantity,
                id:Math.random().toString().substring(2)
            }
            state.push(order);
        },
        cancelOrder(state,actions){
            return state.filter(item=>item.id!==actions.payload.id);
        }
    }
});

export const OrderActions=OrderSlice.actions;
export default OrderSlice.reducer;