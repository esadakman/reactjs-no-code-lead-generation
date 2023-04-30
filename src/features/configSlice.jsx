import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputPages: 0,
  inputConfig: [],
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
  name: "config",
  initialState,
  reducers: {
    setInputPages: (state, action) => {
      state.inputPages = action.payload;
    },
    setInputConfig: (state, action) => {
      state.inputConfig = action.payload;
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
    setConfig: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

// Export the new setConfig action
export const {
  setInputPages,
  setInputConfig,
  setOutputPages,
  setOutputConfig,
  setContactPage,
  setContactPageInputs,
  setConfig,
} = configSlice.actions;

export default configSlice.reducer;


// const initialState = {
//   inputPages: 2,
//   inputConfig: [
//     {
//       title: "1.page",
//       description: "Description 1",
//       inputVariables: [
//         {
//           name: "AAA",
//           placeholder: "Enter AAA",
//           type: "text",
//           component: "input",
//         },
//       ],
//       imageUrl: "https://source.unsplash.com/user/erondu/1600x900",
//     },
//     {
//       title: "2.page",
//       description: "Description 2",
//       inputVariables: [
//         {
//           name: "BBB",
//           placeholder: "Enter BBB",
//           type: "text",
//           component: "input",
//         },
//         {
//           name: "CCC",
//           placeholder: "Select CCC",
//           type: "select",
//           component: "select",
//         },
//       ],
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//     },
//   ],
//   outputPages: 1,
//   outputConfig: [
//     {
//       title: "Output Page",
//       description: "Output Description",
//       outputVariables: [
//         {
//           name: "ZZZ",
//           calculation: "2 * (AAA + 10) + BBB",
//         },
//         {
//           name: "YYY",
//           calculation: "3 * CCC + ZZZ",
//         },
//       ],
//       imageUrl: "https://source.unsplash.com/user/erondu/1600x900",
//     },
//   ],
//   contactPage: true,
//   contactPageInputs: {
//     name: true,
//     surname: true,
//     phone: true,
//   },
// };