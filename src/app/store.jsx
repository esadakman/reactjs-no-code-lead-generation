import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import adminConfigReducer from '../features/configSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    config: adminConfigReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
