import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex items-center w-full px-6 py-3 shadow-xl">
      <img
        src="https://demo.solarvis.co/images/sun.png"
        alt="Start"
        className="w-10"
      />
      <div className="flex-1 mx-4 h-2 bg-gray-300 rounded">
        <div
          className="h-full bg-blue-600 rounded"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <img
        src="https://demo.solarvis.co/images/solar-panel-home.png"
        alt="End"
        className="w-10"
      />
    </div>
  );
};

export default ProgressBar;
