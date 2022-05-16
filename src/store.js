import { configureStore } from "@reduxjs/toolkit";

//importovanje slice-a

import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});