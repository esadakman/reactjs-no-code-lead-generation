import { createSlice } from "@reduxjs/toolkit";

const userStorage = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  authUser: userStorage ? userStorage : false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      state.authUser = action.payload;
    },
    clearAuthUser: (state) => {
      localStorage.removeItem("userInfo"); // Add this line to clear local storage
      state.authUser = false;
    },
  },
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;

export default authSlice.reducer;
