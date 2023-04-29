import { createSlice } from '@reduxjs/toolkit';

const leadSettingsSlice = createSlice({
  name: 'leadSettings',
  initialState: {
    inputPages: 1,
    inputPageSettings: [
      {
        title: '',
        description: '',
        inputVariables: [
          {
            name: '',
            placeholder: '',
            type: 'text',
            componentType: 'input',
          },
        ],
        calculation: '',
      },
    ],
    outputPages: 1,
    outputPageSettings: [
      {
        title: '',
        description: '',
        outputVariables: [
          {
            name: '',
            value: '',
            unit: '',
          },
        ],
      },
    ],
    contactPage: true,
    contactFormSettings: {
      name: true,
      surname: true,
      phone: true,
      email: true,
      companyName: true,
      address: true,
    },
    leftHandSideImage: '',
  },
  reducers: {
    setInputPages: (state, action) => {
      state.inputPages = action.payload;
    },
    setInputPageSettings: (state, action) => {
      state.inputPageSettings[action.payload.index] = action.payload.settings;
    },
    setOutputPages: (state, action) => {
      state.outputPages = action.payload;
    },
    setOutputPageSettings: (state, action) => {
      state.outputPageSettings[action.payload.index] = action.payload.settings;
    },
    setContactPage: (state, action) => {
      state.contactPage = action.payload;
    },
    setContactFormSettings: (state, action) => {
      state.contactFormSettings = { ...state.contactFormSettings, ...action.payload };
    },
    setLeftHandSideImage: (state, action) => {
      state.leftHandSideImage = action.payload;
    },
  },
});

export const {
  setInputPages,
  setInputPageSettings,
  setOutputPages,
  setOutputPageSettings,
  setContactPage,
  setContactFormSettings,
  setLeftHandSideImage,
} = leadSettingsSlice.actions;

export default leadSettingsSlice.reducer;
