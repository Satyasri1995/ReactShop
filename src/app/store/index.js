import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./slices/ProductSlice";
import CartReducer from "./slices/CartSlice";
import OrderSlice from "./slices/OrderSlice";
import AuthSlice from "./slices/AuthSlice";
import UISlice from "./slices/UISlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
    order: OrderSlice,
    auth: AuthSlice,
    ui: UISlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
