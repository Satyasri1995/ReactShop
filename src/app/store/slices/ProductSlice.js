import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name:"products",
    initialState:[],
    reducers:{
        addProduct(state,actions){
            state.push(actions.payload);
        },
        deleteProduct(state,actions){
            state=state.filter(product=>product.id!==actions.payload);
        },
        updateProduct(state,actions){
            const idx=state.findIndex(product=>product.id===actions.payload.id);
            state[idx]=actions.payload;
        },
        replaceProducts(state,actions){
            return actions.payload;
        }
    }
});

export const ProductActions = ProductSlice.actions;
export default ProductSlice.reducer;

