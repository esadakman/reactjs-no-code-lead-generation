import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import leadSettingsReducer from '../features/leadSettingsSlice';

const store = configureStore({
    reducer: {
      auth: authReducer,
      leadSettings: leadSettingsReducer,
    },
    // devTools: process.env.NODE_ENV !== 'production',
  });
  export default store;