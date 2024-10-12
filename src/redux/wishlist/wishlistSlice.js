import { createSlice } from "@reduxjs/toolkit";
import Wig7 from "assets/images/wigs/7.png";
import Wig8 from "assets/images/wigs/8.png";
import Wig9 from "assets/images/wigs/9.png";

const ISSERVER = typeof window === "undefined";

// get data from wishlist
const data =
  !ISSERVER && localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

const initialState = {
  data: [
    {
      _id: 6,
      name: "Lace transparent",
      price: "70",
      type: "wig",
      src: Wig7,
      alt: "TRANSPARENT",
      category: "custom",
      subCategory: "transparent",
    },
    {
      _id: 2,
      name: "Lace hd",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "hd",
      src: Wig8,
      alt: "HD",
    },
    {
      _id: 7,
      name: "Lace watercolor",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "watercolor",
      src: Wig9,
      alt: "WATERCOLOR",
    },
  ],
  loading: false,
  message: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      console.log("wiiish", action.payload);
      const product = action.payload;
      state.data.push(product);
    },
    removeFromWishlist(state, action) {
      state.data = state.data.filter(
        (product) => product._id !== action.payload
      );
    },

    resetWishlist(state, action) {
      state.data = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  setLocalStorageItems,
  resetWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
