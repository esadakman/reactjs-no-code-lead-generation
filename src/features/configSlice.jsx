import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputPages: 0,
  formConfig: [],
  outputPages: 0,
  outputConfig: [],
  contactPage: false,
  contactPageInputs: {
    name: true,
    surname: true,
    phone: true,
    email: true,
    companyName: true,
    address: true,
  },
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setInputPages: (state, action) => {
      state.inputPages = action.payload;
    },
    setFormConfig: (state, action) => {
      state.formConfig = action.payload;
    },
    setOutputPages: (state, action) => {
      state.outputPages = action.payload;
    },
    setOutputConfig: (state, action) => {
      state.outputConfig = action.payload;
    },
    setContactPage: (state, action) => {
      state.contactPage = action.payload;
    },
    setContactPageInputs: (state, action) => {
      state.contactPageInputs = action.payload;
    },
    // Add any other necessary reducers
    setConfig: (state, action) => {
      state.inputPages = action.payload.inputPages;
      state.formConfig = action.payload.formConfig;
      state.outputPages = action.payload.outputPages;
      state.outputConfig = action.payload.outputConfig;
      state.contactPage = action.payload.contactPage;
    },
  },
});

// Export the new setConfig action
export const {
  setInputPages,
  setFormConfig,
  setOutputPages,
  setOutputConfig,
  setContactPage,
  setContactPageInputs,
  setConfig,
} = configSlice.actions;

export default configSlice.reducer;
