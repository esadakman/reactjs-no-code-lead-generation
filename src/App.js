
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="top-right" />
        <AppRouter />
      </Provider>
    </>
  );
};

export default App;
