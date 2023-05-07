import React from "react";

const OutputPage = ({ page, pageIndex, handleOutputChange }) => {
  const handleOutputVariableChange = (e, outputIndex, field) => {
    const updatedOutputConfig = [...page.outputVariables];
    updatedOutputConfig[outputIndex][field] = e.target.value;
    handleOutputChange(e, pageIndex, outputIndex, "outputVariables");
  };

  return (
    <div key={`output-page-${pageIndex}`} className="mb-4">
      <h3 className="text-lg font-bold mb-2">Output Page {pageIndex + 1}</h3>
      <div className="mb-2">
        <label className="block mb-1">Title:</label>
        <input
          type="text"
          value={page.title || ""}
          required
          onChange={(e) => handleOutputChange(e, pageIndex, null, "title")}
          className="px-2 py-1 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description:</label>
        <input
          type="text"
          value={page.description || ""}
          required
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
          required
          onChange={(e) => handleOutputChange(e, pageIndex, null, "imageUrl")}
          className="px-2 py-1 border border-gray-300 rounded w-full"
        />
      </div>
      <fieldset className="border rounded p-2 space-y-2">
        <legend className="text-md font-bold mb-2">Output Variables:</legend>
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
                handleOutputVariableChange(e, outputIndex, "name")
              }
              className="px-2 py-1 border border-gray-300 rounded w-full"
            />
            <label className="block mb-1">Output Value:</label>
            <input
              type="text"
              value={output.value || ""}
              onChange={(e) =>
                handleOutputVariableChange(e, outputIndex, "value")
              }
              className="px-2 py-1 border border-gray-300 rounded w-full"
            />
            <label className="block mb-1">Output Unit:</label>
            <input
              type="text"
              value={output.unit || ""}
              onChange={(e) =>
                handleOutputVariableChange(e, outputIndex, "unit")
              }
              className="px-2 py-1 border border-gray-300 rounded w-full"
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default OutputPage;
