import { createSlice } from "@reduxjs/toolkit";
import Products from "../../models/Products";
import generaterandom from "generaterandom";

const initProducts={...new Products()};

const ProductSlice = createSlice({
    name:"products",
    initialState:{...initProducts},
    reducers:{
        addProduct(state,actions){
            const product={
                ...actions.payload,
                id:generaterandom.string(10)
            }
            state.productItems.push(product);
            state.saved=false;
        },
        deleteProduct(state,actions){
            state.productItems.filter(product=>product.id!==actions.payload);
            state.saved=false;
        },
        updateProduct(state,actions){
            const idx=state.productItems.findIndex(product=>product.id===actions.payload.id);
            state.productItems[idx]=actions.payload;
            state.saved=false;
        },
        replaceProducts(state,actions){
            state.productItems=actions.payload;
            state.saved=true;
        },
        status(state,actions){
            state.saved=actions.payload;
        },
        editProduct(state,actions){
            state.editProduct=actions.payload;
        }
    }
});

export const ProductActions = ProductSlice.actions;
export default ProductSlice.reducer;

