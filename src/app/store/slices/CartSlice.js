import { createSlice } from "@reduxjs/toolkit";

const initialCartState=[
    {
        product:{
            id:Math.random().toString().substring(2),
            name:"React Router",
            url:"https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png",
            price:10
        },
        quantity:1
    }
]

const CartSlice = createSlice({
    name:"cart",
    initialState:initialCartState,
    reducers:{
        addProduct(state,actions){
            const idx=state.findIndex(item=>item.product.id===actions.payload.product.id);
            if(idx>=0){
                state[idx].quantity+=1;
            }else{
                state.push({product:actions.payload.product,quantity:1});
            }
        },
        deleteProduct(state,actions){
            const idx=state.findIndex(item=>item.product.id===actions.payload.product.id);
            if(idx>=0){
                state[idx].quantity-=1;
            }else{
                state=state.filter(item=>item.product.id!==actions.payload.product.id)
            }
        }
    }
});

export const CartActions = CartSlice.actions;
export default CartSlice.reducer;