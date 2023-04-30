// LeadGeneration.js
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const config = useSelector((state) => state.config);
  const [userInput, setUserInput] = useState({});
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleInputChange = (event, variableName) => {
    setUserInput({ ...userInput, [variableName]: event.target.value });
  };

  const performCalculations = () => {
    // Perform calculations based on user input and admin's formula
  };

  const handleNext = () => {
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handleBack = () => {
    setCurrentPageIndex(currentPageIndex - 1);
  };

  const handleSubmit = () => {
    // Perform actions with user's information after the lead generation process is completed
  };

  return (
    <div>
      {config.inputPages.map(
        (inputPage, pageIndex) =>
          pageIndex === currentPageIndex && (
            <div key={`input-page-${pageIndex}`} className="mb-4">
              {/* Render input fields for the current input page */}
              {inputPage.inputs.map((input, inputIndex) => (
                <div key={`input-${inputIndex}`} className="mb-2">
                  <label
                    htmlFor={`input-${input.variableName}`}
                    className="block font-medium"
                  >
                    {input.variableName}:
                  </label>
                  <input
                    type="text"
                    id={`input-${input.variableName}`}
                    value={userInput[input.variableName] || ""}
                    onChange={(event) =>
                      handleInputChange(event, input.variableName)
                    }
                    className="border rounded px-2 py-1 w-full"
                  />
                </div>
              ))}
            </div>
          )
      )}

      {config.outputPages.map(
        (outputPage, pageIndex) =>
          pageIndex === currentPageIndex - config.inputPages.length && (
            <div key={`output-page-${pageIndex}`} className="mb-4">
              {/* Render output fields for the current output page */}
              {outputPage.outputs.map((output, outputIndex) => (
                <div key={`output-${outputIndex}`} className="mb-2">
                  <p>
                    {output.name}: {performCalculations()[output.name]}
                  </p>
                </div>
              ))}
            </div>
          )
      )}

      {config.contactPage &&
        currentPageIndex ===
          config.inputPages.length + config.outputPages.length && (
          <form onSubmit={handleSubmit}>
            {/* Render contact form fields based on admin configurations */}
          </form>
        )}

      <button onClick={handleBack} disabled={currentPageIndex === 0}>
        Back
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Home;
