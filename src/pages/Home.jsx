import React, { useState } from "react";
import { RegisterIcon } from "../helpers/svg";
import { useSelector } from "react-redux";

const Home = () => {
  const inputConfig = useSelector((state) => state.config.inputConfig);
  const outputConfig = useSelector((state) => state.config.outputConfig);
  const contactPageInputs = useSelector(
    (state) => state.config.contactPageInputs
  );

  const [contactInputs, setContactInputs] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const [step, setStep] = useState(1);
  const [inputValues, setInputValues] = useState({});
  const handleContactInputChange = (name, value) => {
    setContactInputs({ ...contactInputs, [name]: value });
  };
  const handleInputChange = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit form data
  // };

  const handleNextStep = () => {
    if (
      step <
      inputConfig.length + (contactPageInputs ? 1 : 0) + outputConfig.length
    ) {
      setStep(step + 1);
    }
  };
  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const currentPage =
    step <= inputConfig.length
      ? inputConfig[step - 1]
      : step === inputConfig.length + 1 && contactPageInputs
      ? { title: "Contact Page", type: "contact" }
      : outputConfig[step - inputConfig.length - (contactPageInputs ? 2 : 1)];

  // console.log(currentPage.outputVariables);
  return (
    <div className="flex items-center min-h-[85vh] bg-gray-50 ">
      <div className="flex-1 2xl:max-w-7xl md:max-w-[90%] max-w-[95%] mx-auto bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 md:min-h-[80vh] min-h-0">
            <img
              className="object-cover w-full h-full md:rounded-l-2xl md:rounded-r-none rounded-t-2xl"
              src={currentPage.imageUrl || "https://source.unsplash.com/random"}
              alt={currentPage.title}
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 md:min-h-[80vh] min-h-0 h-full">
            <div className="w-full">
              <div className="flex justify-center">
                <RegisterIcon />
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                {currentPage.title}
              </h1>

              {step <= inputConfig.length && (
                <div>
                  {currentPage.inputVariables?.map((inputVar) => (
                    <div key={inputVar.name}>
                      <label className="block mt-4 text-sm">
                        {inputVar.placeholder}
                      </label>
                      <input
                        className="profile-input"
                        placeholder={inputVar.placeholder}
                        type={inputVar.type}
                        value={inputValues[inputVar.name] || ""}
                        onChange={(e) =>
                          handleInputChange(inputVar.name, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              )}

              {currentPage.type === "contact" && (
                <div>
                  {Object.entries(contactPageInputs)
                    .filter(([, enabled]) => enabled)
                    .map(([key]) => (
                      <div key={key}>
                        <label className="block mt-4 text-sm">{key}</label>
                        <input
                          className="profile-input"
                          placeholder={`Enter ${key}`}
                          value={contactInputs[key]}
                          onChange={(e) =>
                            handleContactInputChange(key, e.target.value)
                          }
                        />
                      </div>
                    ))}
                </div>
              )}

              {step ===
                inputConfig.length +
                  (contactPageInputs ? 1 : 0) +
                  outputConfig.length && (
                <div>
                  <p>
                    ZZZ:{" "}
                    {2 * (parseInt(inputValues.AAA || 0) + 10) +
                      parseInt(inputValues.BBB || 0)}
                  </p>
                  <p>
                    YYY:{" "}
                    {3 * parseInt(inputValues.CCC || 0) +
                      (2 * (parseInt(inputValues.AAA || 0) + 10) +
                        parseInt(inputValues.BBB || 0))}
                  </p>
                </div>
              )}

              <div className="mt-4 flex">
                <button
                  className="btn-blue-two mr-2"
                  onClick={handleBackStep}
                  disabled={step === 1}
                >
                  Back
                </button>
                <button className="btn-blue-two" onClick={handleNextStep}>
                  {step ===
                  inputConfig.length +
                    (contactPageInputs ? 1 : 0) +
                    outputConfig.length
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// function InputFields({ inputs }) {
//   return inputs.map((input, index) => (
//     <div key={index} className="mb-4">
//       <label className="block text-sm" htmlFor={input.name}>
//         {input.name}
//       </label>
//       <input
//         id={input.name}
//         type={input.type}
//         className="profile-input"
//         placeholder={input.placeholder}
//       />
//     </div>
//   ));
// }

// function NavigationButtons({ currentPage, handleBack, handleNext, lastPage }) {
//   return (
//     <div className="mt-4 flex justify-center">
//       <button
//         className="btn-blue-two mr-2"
//         onClick={handleBack}
//         disabled={currentPage === 0}
//       >
//         Back
//       </button>
//       <button
//         className="btn-blue-two ml-2"
//         onClick={handleNext}
//         disabled={currentPage === lastPage}
//       >
//         {currentPage === lastPage ? "Submit" : "Next"}
//       </button>
//     </div>
//   );
// }

// function Home() {
//   const config = useSelector((state) => state.config);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleNext = () => {
//     if (currentPage < config.inputPages - 1) {
//       setCurrentPage(currentPage + 1);
//     } else {
//       setIsSubmitted(true);
//     }
//   };

//   const handleBack = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const renderPage = () => {
//     const page = config.inputConfig[currentPage];

//     return (
//       <div>
//         <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
//           {page.title}
//         </h1>
//         <p>{page.description}</p>
//         <InputFields inputs={page.inputVariables} />
//       </div>
//     );
//   };

//   const renderOutputPage = () => {
//     const page = config.outputConfig[0];

//     return (
//       <div>
//         <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
//           {page.title}
//         </h1>
//         <p>{page.description}</p>
//         {/* Add any additional content you want to display on the output page here */}
//       </div>
//     );
//   };

//   const renderContactPage = () => {
//     return (
//       <div>
//         <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
//           Contact Page
//         </h1>
//         <p>Please provide your contact information:</p>
//         {/* Add the contact page input fields here */}
//       </div>
//     );
//   };

//   const page = config.inputConfig[currentPage];

//   return (
//     <div className="flex items-center min-h-[85vh] bg-gray-50 ">
//       <div className="flex-1 2xl:max-w-7xl md:max-w-[90%] max-w-[95%] mx-auto bg-white rounded-2xl shadow-2xl">
//         <div className="flex flex-col md:flex-row">
//           <div className="h-32 md:h-auto md:w-1/2 md:min-h-[80vh] min-h-0">
//             <img
//               className="object-cover w-full h-full md:rounded-l-2xl md:rounded-r-none rounded-t-2xl"
//               src={
//                 page.imageUrl ||
//                 "https://source.unsplash.com/user/erondu/1600x900"
//               }
//               alt="img"
//             />
//           </div>
//           <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 md:min-h-[80vh] min-h-0 h-full">
//             <div className="w-full">
//               <div className="flex justify-center">
//               </div>
//               {!isSubmitted ? (
//                 currentPage < config.inputPages ? (
//                   renderPage()
//                 ) : (
//                   renderContactPage()
//                 )
//               ) : (
//                 renderOutputPage()
//               )}
//               {!isSubmitted && (
//                 <NavigationButtons
//                   currentPage={currentPage}
//                   handleBack={handleBack}
//                   handleNext={handleNext}
//                   lastPage={
//                     config.contactPage
//                       ? config.inputPages
//                       : config.inputPages - 1
//                   }
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
