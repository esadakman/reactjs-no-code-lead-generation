import React from 'react';

const InputPage = ({ config, inputValues, handleInputChange }) => {
  return (
    <div>
      {config.inputVariables?.map((inputVar) => (
        <div key={inputVar.name}>
          <label className="block mt-4 text-sm">
            {inputVar.placeholder}
          </label>
          <input
            className="profile-input"
            placeholder={inputVar.placeholder}
            type={inputVar.type}
            value={inputValues[inputVar.name] || ''}
            onChange={(e) =>
              handleInputChange(inputVar.name, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default InputPage;
