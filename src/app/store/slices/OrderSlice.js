import { createSlice } from "@reduxjs/toolkit";
import generaterandom from "generaterandom";
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
                id:generaterandom.string(10)
            }
            state.orderItems.push(order);
            state.saved=false;
        },
        cancelOrder(state,actions){
            state.orderItems=state.orderItems.filter(item=>item.id!==actions.payload.id);
            state.saved=false;
        },
        replaceOrders(state,actions){
            state.orderItems=actions.payload;
            state.saved=true;
        },
        status(state,actions){
            state.saved=actions.payload;
        }
    }
});

export const OrderActions=OrderSlice.actions;
export default OrderSlice.reducer;