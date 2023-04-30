import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputPages: [],
    outputPages: [],
    contactPage: false,
    contactFormInputs: {
        name: false,
        surname: false,
        phone: false,
        email: false,
        companyName: false,
        address: false,
    },
};

const adminConfigSlice = createSlice({
    name: 'adminConfig',
    initialState,
    reducers: {
        setInputPages: (state, action) => {
            state.inputPages = action.payload;
        },
        setOutputPages: (state, action) => {
            state.outputPages = action.payload;
        },
        setContactPage: (state, action) => {
            state.contactPage = action.payload;
        },
        setContactFormInputs: (state, action) => {
            state.contactFormInputs = action.payload;
        },
    },
});

export const {
    setInputPages,
    setOutputPages,
    setContactPage,
    setContactFormInputs,
} = adminConfigSlice.actions;

export default adminConfigSlice.reducer;