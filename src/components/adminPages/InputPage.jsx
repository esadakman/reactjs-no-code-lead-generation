import React from 'react'

const InputPage = ({ page, pageIndex, handleInputChange }) => {
    const handleInputVariableChange = (e, inputIndex, field) => {
      const updatedInputConfig = [...page.inputVariables];
      updatedInputConfig[inputIndex][field] = e.target.value;
      handleInputChange(e, pageIndex, inputIndex, "inputVariables");
    };
    
  
    return (
      <div key={`input-page-${pageIndex}`} className="mb-4">
        <h3 className="text-lg font-bold mb-2">Input Page {pageIndex + 1}</h3>
        <div className="mb-2">
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={page.title || ""}
            onChange={(e) => handleInputChange(e, pageIndex, null, "title")}
            className="px-2 py-1 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Description:</label>
          <input
            type="text"
            value={page.description || ""}
            onChange={(e) => handleInputChange(e, pageIndex, null, "description")}
            className="px-2 py-1 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Image URL:</label>
          <input
            type="text"
            value={page.imageUrl || ""}
            onChange={(e) => handleInputChange(e, pageIndex, null, "imageUrl")}
            className="px-2 py-1 border border-gray-300 rounded w-full"
          />
        </div>
        <fieldset className="border rounded p-2 space-y-2">
          <legend className="text-md font-bold mb-2">Input Variables:</legend>
          {page.inputVariables.map((input, inputIndex) => (
            <div
              key={`input-variable-${pageIndex}-${inputIndex}`}
              className="space-y-2"
            >
              <label className="block mb-1">Input Variable Name:</label>
              <input
                type="text"
                value={input.name || ""}
                onChange={(e) => handleInputVariableChange(e, inputIndex, "name")}
                className="px-2 py-1 border border-gray-300 rounded w-full"
              />
              <label className="block mb-1">Input Variable Placeholder:</label>
              <input
                type="text"
                value={input.placeholder || ""}
                onChange={(e) =>
                  handleInputVariableChange(e, inputIndex, "placeholder")
                }
                className="px-2 py-1 border border-gray-300 rounded w-full"
              />
              <label className="block mb-1">Input Variable Type:</label>
              <select
                value={input.type || ""}
                onChange={(e) => handleInputVariableChange(e, inputIndex, "type")}
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
                  handleInputVariableChange(e, inputIndex, "component")
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
    );
  };

export default InputPage