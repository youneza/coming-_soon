import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
import productsReducer from "./products/productsSlice";
import productReducer from "./productDetails/productDetailsSlice";
import authReducer from "./auth/authSlice";
import orderReducer from "./order/orderSlice";
import usersReducer from "./users";
import ordersReducer from "./orders";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
    product: productReducer,
    order: orderReducer,
    users: usersReducer,
    orders: ordersReducer,
  },
});
