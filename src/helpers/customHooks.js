import { useState } from "react";

// useInputHandlers.js
export const useInputHandlers = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return [values, handleInputChange];
};

// useStepHandlers.js
export const useStepHandlers = (initialStep, maxSteps, allInputs) => {
  const [step, setStep] = useState(initialStep);
  const handleNextStep = () => {
    if (step < maxSteps) setStep(step + 1);
    console.log(allInputs)
  };
  const handleBackStep = () => {
    if (step > 1) setStep(step - 1);
  };
  return [step, handleNextStep, handleBackStep];
};
