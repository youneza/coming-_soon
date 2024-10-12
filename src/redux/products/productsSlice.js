import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import header from "../../utils/header";
import Wig1 from "assets/images/wigs/1.png";
import Wig2 from "assets/images/wigs/2.png";
import Wig3 from "assets/images/wigs/3.png";
import Wig4 from "assets/images/wigs/4.png";
import Wig5 from "assets/images/wigs/5.png";
import Wig6 from "assets/images/wigs/6.png";
import Wig7 from "assets/images/wigs/7.png";
import Wig8 from "assets/images/wigs/8.png";
import Wig9 from "assets/images/wigs/9.png";

const initialState = {
  data: [
    {
      _id: 1,
      qty: "1",

      src: Wig2,
      alt: "RAW",
      name: "Lace Raw",
      price: "110",
      type: "wig",
      category: "hd",
      subCategory: "raw",
    },
    {
      qty: "1",

      src: Wig1,
      alt: "VIRGIN",
      _id: 2,
      name: "Lace Virgin",
      price: "100",
      type: "wig",
      category: "hd",
      subCategory: "virgin",
    },
    {
      qty: "1",

      src: Wig3,
      alt: "613",
      _id: 3,
      name: "Lace 613",
      price: "90",
      type: "wig",
      category: "hd",
      subCategory: "613",
    },

    {
      qty: "1",

      src: Wig5,
      alt: "RAW",
      _id: 4,
      name: "Lace raw",
      price: "90",
      type: "wig",
      category: "transparent",
      subCategory: "raw",
    },
    {
      qty: "1",

      src: Wig4,
      alt: "VIRGIN",
      _id: 5,
      name: "Lace Virgin",
      price: "80",
      type: "wig",
      category: "transparent",
      subCategory: "virgin",
    },
    {
      qty: "1",

      src: Wig6,
      alt: "613",
      _id: 6,
      name: "Lace 613",
      price: "70",
      type: "wig",
      category: "transparent",
      subCategory: "613",
    },
    {
      _id: 7,
      name: "Lace transparent",
      price: "70",
      type: "wig",
      qty: "1",

      src: Wig7,
      alt: "TRANSPARENT",
      category: "custom",
      subCategory: "transparent",
    },
    {
      _id: 8,
      name: "Lace hd",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "hd",
      qty: "1",

      src: Wig8,
      alt: "HD",
    },
    {
      _id: 9,
      name: "Lace watercolor",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "watercolor",
      qty: "1",

      src: Wig9,
      alt: "WATERCOLOR",
    },
    {
      _id: 11,
      qty: "1",

      src: Wig2,
      alt: "RAW",
      name: "Lace Raw",
      price: "110",
      type: "wig",
      category: "hd",
      subCategory: "raw",
    },
    {
      qty: "1",

      src: Wig1,
      alt: "VIRGIN",
      _id: 12,
      name: "Lace Virgin",
      price: "100",
      type: "wig",
      category: "hd",
      subCategory: "virgin",
    },
    {
      qty: "1",

      src: Wig3,
      alt: "613",
      _id: 13,
      name: "Lace 613",
      price: "90",
      type: "wig",
      category: "hd",
      subCategory: "613",
    },

    {
      qty: "1",

      src: Wig5,
      alt: "RAW",
      _id: 14,
      name: "Lace raw",
      price: "90",
      type: "wig",
      category: "transparent",
      subCategory: "raw",
    },
    {
      qty: "1",

      src: Wig4,
      alt: "VIRGIN",
      _id: 15,
      name: "Lace Virgin",
      price: "80",
      type: "wig",
      category: "transparent",
      subCategory: "virgin",
    },
    {
      qty: "1",

      src: Wig6,
      alt: "613",
      _id: 16,
      name: "Lace 613",
      price: "70",
      type: "wig",
      category: "transparent",
      subCategory: "613",
    },
    {
      _id: 17,
      name: "Lace transparent",
      price: "70",
      type: "wig",
      qty: "1",

      src: Wig7,
      alt: "TRANSPARENT",
      category: "custom",
      subCategory: "transparent",
    },
    {
      _id: 18,
      name: "Lace hd",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "hd",
      qty: "1",

      src: Wig8,
      alt: "HD",
    },
    {
      _id: 19,
      name: "Lace watercolor",
      price: "70",
      type: "wig",
      category: "custom",
      subCategory: "watercolor",
      qty: "1",

      src: Wig9,
      alt: "WATERCOLOR",
    },
  ],
  loading: false,
  message: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (keyword = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/products?keyword=${keyword}`);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      console.log("product", product);

      const { data } = await axios.post("/products", { product }, header);
      console.log("data", data);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/products/${product._id}`,
        { product },
        header
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/products/${id}`, header);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    latest(state) {
      state.data.sort((a, b) => (a.created < b.created ? 1 : -1));
    },
    lowest(state) {
      state.data.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    highest(state) {
      state.data.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
      state.message = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.loading = false;
      state.data = action.payload;
      state.data.sort((a, b) => (a.created < b.created ? 1 : -1));

      state.message = null;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    [addProduct.pending]: (state, action) => {
      state.loading = false;
      state.message = "we are processing your request";
    },
    [addProduct.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.loading = false;
      state.message = action.payload.message;
      state.data.push(action.payload.product);
      state.data.sort((a, b) => (a.created < b.created ? 1 : -1));
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    [deleteProduct.pending]: (state, action) => {
      state.loading = false;
      state.message = "we are processing your request";
    },
    [deleteProduct.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.message = action.payload.message;
      state.data = state.data.filter(
        (product) => product._id !== action.payload.id
      );
    },
    [deleteProduct.rejected]: (state, action) => {
      state.message = action.payload.message;
    },
    [editProduct.pending]: (state, action) => {
      state.loading = false;
      state.message = "we are processing your request";
    },
    [editProduct.fulfilled]: (state, action) => {
      console.log(action.payload.product);
      state.data = state.data.map((product) => {
        if (product._id === action.payload.product._id)
          product = action.payload.product;
        return product;
      });

      state.loading = false;
      state.message = action.payload.message;
    },
    [editProduct.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
  },
});

export const { latest, lowest, highest } = productsSlice.actions;

export default productsSlice.reducer;
