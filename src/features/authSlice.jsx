import { createSlice } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from "../helpers/customToastify";

const userStorage = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  authUser: userStorage ? userStorage : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password, navigate } = action.payload;
      if (email === "solarvis@gmail.com" && password === "solarvis123") {
        localStorage.setItem("userInfo", JSON.stringify(true));
        state.authUser = true;
        toastSuccess("Login successful!");
        navigate("/"); 
      } else {
        state.authUser = false;
        toastError("Invalid email or password");
      }
    },
    clearAuthUser: (state) => {
      localStorage.removeItem("userInfo");
      state.authUser = false;
    },
  },
});

export const { login, clearAuthUser } = authSlice.actions;

export default authSlice.reducer;
