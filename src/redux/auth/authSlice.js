import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import header from "../../utils/header";

const ISSERVER = typeof window === "undefined";

const initialState = {
  user: (!ISSERVER && JSON.parse(localStorage.getItem("user"))) || {
    username: "youssef",
    _id: "emproj",
  },
  loading: false,
  message: null,
};

// register thunk

export const register = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", user);
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

// login thunk
export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", user);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

//edit user info thunk
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put("/auth/", { user }, header);
      console.log("user", data.user);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
      state.message = null;
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.user = action.payload.user;
      state.loading = false;
      state.message = null;
    },
    [login.rejected]: (state, action) => {
      if (!action.payload) return;
      state.message = action.payload;
      state.loading = false;
      state.user = null;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
      state.message = null;
      state.user = null;
    },
    [register.fulfilled]: (state, action) => {
      if (!action.payload) return;
      state.user = action.payload.user;
      state.loading = false;
      state.message = null;
    },
    [register.rejected]: (state, action) => {
      if (!action.payload) return;
      state.message = action.payload;
      state.loading = false;
      state.user = null;
    },

    [updateUser.fulfilled]: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, ...action.payload.user })
      );
      state.user = JSON.parse(localStorage.getItem("user"));

      state.loading = false;
      state.message = null;
    },
    [updateUser.rejected]: (state, action) => {},
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
