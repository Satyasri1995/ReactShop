import { createSlice } from "@reduxjs/toolkit";
import generaterandom from "generaterandom";
import Cart from "../../models/Cart";

const initCart = { ...new Cart() };

const CartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    addProduct(state, actions) {
      let idx = state.cartItems.findIndex(
        (item) => item.product.id === actions.payload.id
      );
      if (idx >= 0) {
        state.cartItems[idx].product = actions.payload;
        state.cartItems[idx].quantity += 1;
        state.saved = false;
      } else {
        state.cartItems.push({
          product: actions.payload,
          quantity: 1,
          id: generaterandom.string(10),
        });
        state.saved = false;
      }
    },
    updateProduct(state, actions) {
      let idx = state.cartItems.findIndex(
        (item) => item.product.id === actions.payload.product.id
      );
      if (idx >= 0) {
        state.cartItems[idx].product = actions.payload.product;
        state.cartItems[idx].quantity = actions.payload.quantity;
        state.saved = false;
      }
    },
    deleteProduct(state, actions) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.product.id !== actions.payload.id
      );
      state.saved = false;
    },
    replaceCart(state, actions) {
      state.cartItems = actions.payload;
      state.saved = true;
    },
    status(state, actions) {
      state.saved = actions.payload;
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice.reducer;
