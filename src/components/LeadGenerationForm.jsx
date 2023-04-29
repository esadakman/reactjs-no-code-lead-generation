import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitLead } from '../features/leadSettingsSlice';

const LeadGenerationForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const history = useNavigate();
  const dispatch = useDispatch();

  // Get lead settings from Redux store
  const leadSettings = useSelector((state) => state.leadSettings);

  // Get current page settings
  const currentPageSettings = leadSettings.inputPageSettings[currentPage];

  // Initialize form data state
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    currentPageSettings.inputVariables.forEach((variable) => {
      initialFormData[variable.name] = '';
    });
    return initialFormData;
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitLead(formData));
    history.push('/confirmation');
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Render input fields based on component type
  const renderInputField = (variable) => {
    switch (variable.componentType) {
      case 'input':
        return (
          <input
            type={variable.type}
            name={variable.name}
            placeholder={variable.placeholder}
            value={formData[variable.name]}
            onChange={handleInputChange}
          />
        );
      case 'select':
        return (
          <select
            name={variable.name}
            value={formData[variable.name]}
            onChange={handleInputChange}
          >
            {variable.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div>
            {variable.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name={variable.name}
                  value={option.value}
                  checked={formData[variable.name] === option.value}
                  onChange={handleInputChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentPageSettings.title}</h2>
      <p>{currentPageSettings.description}</p>
      {currentPageSettings.inputVariables.map((variable) => (
        <div key={variable.name}>
          <label>{variable.label}</label>
          {renderInputField(variable)}
        </div>
      ))}
      <button
        type="button"
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={currentPage === leadSettings.inputPageSettings.length - 1}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default LeadGenerationForm;
