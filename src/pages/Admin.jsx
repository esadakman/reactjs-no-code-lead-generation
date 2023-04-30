import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setConfig } from "../features/configSlice";
import { toastSuccess } from "../helpers/customToastify";

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
  const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

  const handleInputChange = (e, pageIndex, inputIndex, field) => {
    const updatedFormConfig = deepCopy(inputConfig);
    if (inputIndex !== null) {
      updatedFormConfig[pageIndex].inputVariables[inputIndex][field] =
        e.target.value;
    } else {
      updatedFormConfig[pageIndex][field] = e.target.value;
    }
    setInputConfig(updatedFormConfig);
  };

  const handleOutputChange = (e, pageIndex, outputIndex, field) => {
    const updatedOutputConfig = deepCopy(outputConfig);
    if (outputIndex !== null) {
      updatedOutputConfig[pageIndex].outputVariables[outputIndex][field] =
        e.target.value;
    } else {
      updatedOutputConfig[pageIndex][field] = e.target.value;
    }
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
    // navigate("/");
    toastSuccess("Your generation tool is configured successfully!");
  };
  // console.log(config)

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
  }, [inputPages]);

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
          imageUrl: "", // Add this line
        })
      );
      setOutputConfig([...outputConfig, ...newOutputPages]);
    } else if (outputPages < currentOutputPages) {
      setOutputConfig(outputConfig.slice(0, outputPages));
    }
  }, [outputPages]);

  // {/* Rest of the code */}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <p>Please fill in the form below to configure the pages:</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Pages */}

        <fieldset className="border rounded p-4">
          <legend className="text-lg font-bold mb-2">Input Pages</legend>
          <div className="mb-2 flex items-center">
            <label className="mr-2">Number of Input Pages:</label>
            <input
              type="number"
              value={inputPages || ""}
              onChange={(e) => setInputPages(parseInt(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          {inputConfig.map((page, pageIndex) => (
            <div key={`input-page-${pageIndex}`} className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                Input Page {pageIndex + 1}
              </h3>
              <div className="mb-2">
                <label className="block mb-1">Title:</label>
                <input
                  type="text"
                  value={page.title || ""}
                  onChange={(e) =>
                    handleInputChange(e, pageIndex, null, "title")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Description:</label>
                <input
                  type="text"
                  value={page.description || ""}
                  onChange={(e) =>
                    handleInputChange(e, pageIndex, null, "description")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Image URL:</label>
                <input
                  type="text"
                  value={page.imageUrl || ""}
                  onChange={(e) =>
                    handleInputChange(e, pageIndex, null, "imageUrl")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <fieldset className="border rounded p-2 space-y-2">
                <legend className="text-md font-bold mb-2">
                  Input Variables:
                </legend>
                {page.inputVariables.map((input, inputIndex) => (
                  <div
                    key={`input-variable-${pageIndex}-${inputIndex}`}
                    className="space-y-2"
                  >
                    <label className="block mb-1">Input Variable Name:</label>
                    <input
                      type="text"
                      value={input.name || ""}
                      onChange={(e) =>
                        handleInputChange(e, pageIndex, inputIndex, "name")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                    <label className="block mb-1">
                      Input Variable Placeholder:
                    </label>
                    <input
                      type="text"
                      value={input.placeholder || ""}
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          pageIndex,
                          inputIndex,
                          "placeholder"
                        )
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                    <label className="block mb-1">Input Variable Type:</label>
                    <select
                      value={input.type || ""}
                      onChange={(e) =>
                        handleInputChange(e, pageIndex, inputIndex, "type")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      {/* Add more options as needed */}
                    </select>
                    <label className="block mb-1">Component Type:</label>
                    <select
                      value={input.component || ""}
                      onChange={(e) =>
                        handleInputChange(e, pageIndex, inputIndex, "component")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    >
                      <option value="input">Input</option>
                      <option value="select">Select</option>
                      <option value="radio">Radio</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                ))}
              </fieldset>
            </div>
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
              onChange={(e) => setOutputPages(parseInt(e.target.value))}
              className="px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          {outputConfig.map((page, pageIndex) => (
            <div key={`output-page-${pageIndex}`} className="mb-4">
              <h3 className="text-lg font-bold mb-2">
                Output Page {pageIndex + 1}
              </h3>
              <div className="mb-2">
                <label className="block mb-1">Title:</label>
                <input
                  type="text"
                  value={page.title || ""}
                  onChange={(e) =>
                    handleOutputChange(e, pageIndex, null, "title")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Description:</label>
                <input
                  type="text"
                  value={page.description || ""}
                  onChange={(e) =>
                    handleOutputChange(e, pageIndex, null, "description")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1">Image URL:</label>
                <input
                  type="text"
                  value={page.imageUrl || ""}
                  onChange={(e) =>
                    handleOutputChange(e, pageIndex, null, "imageUrl")
                  }
                  className="px-2 py-1 border border-gray-300 rounded w-full"
                />
              </div>
              <fieldset className="border rounded p-2 space-y-2">
                <legend className="text-md font-bold mb-2">
                  Output Variables:
                </legend>
                {page.outputVariables.map((output, outputIndex) => (
                  <div
                    key={`output-variable-${pageIndex}-${outputIndex}`}
                    className="space-y-2"
                  >
                    <label className="block mb-1">Output Name:</label>
                    <input
                      type="text"
                      value={output.name || ""}
                      onChange={(e) =>
                        handleOutputChange(e, pageIndex, outputIndex, "name")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                    <label className="block mb-1">Output Value:</label>
                    <input
                      type="text"
                      value={output.value || ""}
                      onChange={(e) =>
                        handleOutputChange(e, pageIndex, outputIndex, "value")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                    <label className="block mb-1">Output Unit:</label>
                    <input
                      type="text"
                      value={output.unit || ""}
                      onChange={(e) =>
                        handleOutputChange(e, pageIndex, outputIndex, "unit")
                      }
                      className="px-2 py-1 border border-gray-300 rounded w-full"
                    />
                  </div>
                ))}
              </fieldset>
            </div>
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

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Configuration
        </button>
      </form>
    </div>
  );
}

export default Admin;
