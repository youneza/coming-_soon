import { createSlice } from "@reduxjs/toolkit";
import Wig7 from "assets/images/wigs/7.png";
import Wig8 from "assets/images/wigs/8.png";
import Wig9 from "assets/images/wigs/9.png";
const ISSERVER = typeof window === "undefined";

// get data from cart
const data =
  !ISSERVER && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const shippingData =
  !ISSERVER && localStorage.getItem("shippingData")
    ? JSON.parse(localStorage.getItem("shippingData"))
    : null;

const paymentMethod =
  !ISSERVER && localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : null;

const initialState = {
  isCartOpen: false,
  data: [
    {
      _id: 7,
      name: "Lace transparent",
      price: "70",
      type: "wig",
      src: Wig7,
      alt: "TRANSPARENT",
      category: "custom",
      subCategory: "transparent",
      qty: "1",
    },
    {
      _id: 8,
      name: "Lace hd",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "hd",
      src: Wig8,
      alt: "HD",
      qty: "1",
    },
    {
      _id: 9,
      name: "Lace watercolor",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "watercolor",
      src: Wig9,
      alt: "WATERCOLOR",
      qty: "2",
    },
  ],
  loading: false,
  message: null,
  shippingData,
  paymentMethod,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart(state, action) {
      const product = action.payload;
      state.data.push(product);
    },
    removeFromCart(state, action) {
      state.data = state.data.filter(
        (product) => product._id !== action.payload
      );
    },
    increment(state, action) {
      const clickedProduct = state.data.find(
        (product) => product._id === action.payload
      );
      clickedProduct.qty++;
    },
    decrement(state, action) {
      const clickedProduct = state.data.find(
        (product) => product._id === action.payload
      );
      // preventing qty from negative values
      if (clickedProduct.qty === 1) return;
      else {
        clickedProduct.qty--;
      }
    },
    resetCart(state, action) {
      state.data = [];
    },
    saveShippingData(state, action) {
      state.shippingData = action.payload;
      localStorage.setItem("shippingData", JSON.stringify(action.payload));
    },
    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
  },
});

export const {
  openCart,
  addToCart,
  increment,
  decrement,
  removeFromCart,
  setLocalStorageItems,
  saveShippingData,
  savePaymentMethod,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
