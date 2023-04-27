import { createSlice } from "@reduxjs/toolkit";

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice : ismi, state'lerin baslangic degerleri ve reducer'lari key-value yapisi seklinde tanimlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.
// const url = "http://127.0.0.1:8000/";

const initialState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  // initialState: initialState,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const {setUser,clearUser} = authSlice.actions;

export default authSlice.reducer;
