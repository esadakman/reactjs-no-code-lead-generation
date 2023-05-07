import React from "react";
import { useSelector } from "react-redux";
import { useInputHandlers, useStepHandlers } from "../helpers/customHooks";
import InputPage from "../components/formPages/InputPage";
import ContactPage from "../components/formPages/ContactPage";
import OutputPage from "../components/formPages/OutputPage";
import { useState } from "react";

const Home = () => {
  const inputConfig = useSelector((state) => state.config.inputConfig);
  const outputConfig = useSelector((state) => state.config.outputConfig);
  const contactPageInputs = useSelector(
    (state) => state.config.contactPageInputs
  );

  const [inputValues, handleInputChange] = useInputHandlers({});
  const [contactInputs, setContactInputs] = useState({});

  const handleContactInputChange = (name, value) => {
    setContactInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  const allInputs = {
    inputPage: { ...inputValues },
    contactPage: { ...contactInputs },
  };

  // console.log(allInputs);
  const maxSteps =
    inputConfig.length + (contactPageInputs ? 1 : 0) + outputConfig.length;
  const [step, handleNextStep, handleBackStep] = useStepHandlers(1, maxSteps);

  const handleInputs = (e) => {
    // e.preventDefault();
    console.log(allInputs);
  };

  const currentPage =
    step <= inputConfig.length
      ? inputConfig[step - 1]
      : step === inputConfig.length + 1 && contactPageInputs
      ? { title: "Contact Page", type: "contact" }
      : outputConfig[step - inputConfig.length - (contactPageInputs ? 2 : 1)];
  return (
    <div className="flex items-center min-h-[85vh] bg-gray-50 ">
      <div className="flex-1 2xl:max-w-7xl md:max-w-[90%] max-w-[95%] mx-auto bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 md:min-h-[80vh] min-h-0">
            <img
              className="object-cover w-full h-full md:rounded-l-2xl md:rounded-r-none rounded-t-2xl"
              src={
                currentPage.imageUrl ||
                "https://source.unsplash.com/user/erondu/1600x900"
              }
              alt={currentPage.title}
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 md:min-h-[80vh] min-h-0 h-full">
            <div className="w-full">
              <div className="flex justify-center">
                {/* <RegisterIcon /> */}
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                {currentPage.title}
              </h1>

              {step <= inputConfig.length && (
                <InputPage
                  config={currentPage}
                  inputValues={inputValues}
                  handleInputChange={handleInputChange}
                />
              )}

              {currentPage.type === "contact" && (
                <ContactPage
                  contactInputs={contactInputs}
                  handleContactInputChange={handleContactInputChange}
                />
              )}

              {step ===
                inputConfig.length +
                  (contactPageInputs ? 1 : 0) +
                  outputConfig.length && (
                <OutputPage config={currentPage} inputValues={inputValues} />
              )}

              {inputConfig.length +
                (contactPageInputs ? 1 : 0) +
                outputConfig.length >
                1 && (
                <div className="mt-4 flex">
                  <button
                    className="btn-blue-two mr-2"
                    onClick={handleBackStep}
                    disabled={step === 1}
                  >
                    Back
                  </button>
                  <button
                    className="btn-blue-two"
                    onClick={() => {
                      if (
                        step ===
                        inputConfig.length +
                          (contactPageInputs ? 1 : 0) +
                          outputConfig.length 
                      ) {
                        handleInputs();
                      } else {
                        handleNextStep();
                      }
                    }}
                  >
                    {step ===
                    inputConfig.length +
                      (contactPageInputs ? 1 : 0) +
                      outputConfig.length
                      ? "Submit"
                      : "Next"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
