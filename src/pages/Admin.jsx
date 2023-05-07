import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetConfig, setConfig } from "../features/configSlice";
import { toastSuccess } from "../helpers/customToastify";
import InputPage from "../components/adminPages/InputPage";
import OutputPage from "../components/adminPages/OutputPage";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = useSelector((state) => state.config);

  const [inputConfig, setInputConfig] = useState(config.inputConfig);
  const [outputConfig, setOutputConfig] = useState(config.outputConfig);
  const [inputPages, setInputPages] = useState(config.inputPages);
  const [outputPages, setOutputPages] = useState(config.outputPages);
  const [contactPage, setContactPage] = useState(config.contactPage);
  const [contactPageInputsState, setContactPageInputsState] = useState(
    config.contactPageInputs
  );

  const handleInputChange = (e, pageIndex, inputIndex, field) => {
    const updatedFormConfig = [...inputConfig];
    if (inputIndex !== null) {
      const updatedInputVariables = [
        ...updatedFormConfig[pageIndex].inputVariables,
      ];
      updatedInputVariables[inputIndex] = {
        ...updatedInputVariables[inputIndex],
        [field]: e.target.value,
      };
      updatedFormConfig[pageIndex].inputVariables = updatedInputVariables;
    } else {
      updatedFormConfig[pageIndex][field] = e.target.value;
    }
    setInputConfig(updatedFormConfig);
  };

  const handleOutputChange = (e, pageIndex, outputIndex, field) => {
    const updatedOutputConfig = [...outputConfig];
    const updatedPage = { ...updatedOutputConfig[pageIndex] }; // Create a new copy of the page object

    if (outputIndex !== null) {
      const updatedOutputVariables = [...updatedPage.outputVariables];
      updatedOutputVariables[outputIndex][field] = e.target.value;
      updatedPage.outputVariables = updatedOutputVariables;
    } else {
      updatedPage[field] = e.target.value;
    }

    updatedOutputConfig[pageIndex] = updatedPage; // Update the page in the outputConfig array
    setOutputConfig(updatedOutputConfig);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setConfig({
        inputPages,
        inputConfig,
        outputPages,
        outputConfig,
        contactPage,
        contactPageInputs: contactPageInputsState,
      })
    );
    // console.log(config);
    navigate("/");
    toastSuccess("Your generation tool is configured successfully!");
  };

  const handleReset = () => {
    dispatch(resetConfig());
    setInputConfig(config.inputConfig);
    setOutputConfig(config.outputConfig);
    setInputPages(config.inputPages);
    setOutputPages(config.outputPages);
    setContactPage(config.contactPage);
    setContactPageInputsState(config.contactPageInputs);
    toastSuccess("Your generation tool is reset successfully!");
  };

  useEffect(() => {
    const currentInputPages = inputConfig.length;
    if (inputPages > currentInputPages) {
      const newInputPages = Array.from(
        { length: inputPages - currentInputPages },
        () => ({
          title: "",
          description: "",
          inputVariables: [
            {
              name: "",
              placeholder: "",
              type: "text",
              component: "input",
            },
          ],
          imageUrl: "",
        })
      );
      setInputConfig([...inputConfig, ...newInputPages]);
    } else if (inputPages < currentInputPages) {
      setInputConfig(inputConfig.slice(0, inputPages));
    }
  }, [inputPages, inputConfig]);

  useEffect(() => {
    const currentOutputPages = outputConfig.length;
    if (outputPages > currentOutputPages) {
      const newOutputPages = Array.from(
        { length: outputPages - currentOutputPages },
        () => ({
          title: "",
          description: "",
          outputVariables: [
            {
              name: "",
              value: "",
              unit: "",
            },
          ],
          imageUrl: "",
        })
      );
      setOutputConfig([...outputConfig, ...newOutputPages]);
    } else if (outputPages < currentOutputPages) {
      setOutputConfig(outputConfig.slice(0, outputPages));
    }
  }, [outputPages, outputConfig]);
  return (
    <div className="container mx-auto px-4 pb-12 ">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Admin Configuration Page
      </h1>
      <p className="text-center">Please fill in the form below to configure the pages:</p>
      <form onSubmit={handleSubmit} className="space-y-4 w-3/4 mx-auto">
        {/* Input Pages */}
        <fieldset className="border rounded p-4">
          <legend className="text-lg font-bold mb-2">Input Pages</legend>
          <div className="mb-2 flex items-center">
            <label className="mr-2">Number of Input Pages:</label>
            <input
              type="number"
              value={inputPages || ""}
              min={0}
              onChange={(e) => setInputPages(parseInt(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          {inputConfig.map((page, pageIndex) => (
            <InputPage
              key={`input-page-${pageIndex}`}
              page={page}
              pageIndex={pageIndex}
              handleInputChange={handleInputChange}
            />
          ))}
        </fieldset>
        {/* Output Pages */}
        <fieldset className="border rounded p-4">
          <legend className="text-lg font-bold mb-2">Output Pages</legend>
          <div className="mb-2 flex items-center">
            <label className="mr-2">Number of Output Pages:</label>
            <input
              type="number"
              value={outputPages || ""}
              min={0}
              onChange={(e) => setOutputPages(parseInt(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          {outputConfig.map((page, pageIndex) => (
            <OutputPage
              key={`output-page-${pageIndex}`}
              page={page}
              pageIndex={pageIndex}
              handleOutputChange={handleOutputChange}
            />
          ))}
        </fieldset>

        {/* Contact Page */}
        <fieldset className="border rounded p-4">
          <legend className="text-lg font-bold mb-2">Contact Page</legend>
          <label className="block mb-2">
            Enable Contact Page:
            <input
              type="checkbox"
              checked={contactPage}
              onChange={(e) => setContactPage(e.target.checked)}
              className="ml-2"
            />
          </label>
          {/* Form input selections */}
          {contactPage && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                Contact Page Form Input Selections:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "name",
                  "surname",
                  "phone",
                  "email",
                  "companyName",
                  "address",
                ].map((input) => (
                  <div key={input} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={contactPageInputsState[input]}
                      onChange={(e) =>
                        setContactPageInputsState({
                          ...contactPageInputsState,
                          [input]: e.target.checked,
                        })
                      }
                      className="mr-2"
                    />
                    <label>
                      {input.charAt(0).toUpperCase() + input.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </fieldset>

        {/* Submit and Reset Buttons */}
        <div className="flex space-x-4">
          <button type="submit" className="btn-blue ">
            Save Configuration
          </button>
          <button type="button" onClick={handleReset} className="btn-red">
            Reset Configuration
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
