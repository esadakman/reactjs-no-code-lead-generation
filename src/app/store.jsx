import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import adminConfigReducer from '../features/adminConfigSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminConfig: adminConfigReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
