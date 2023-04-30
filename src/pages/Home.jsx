import React, { useState } from "react";
import { RegisterIcon } from "../helpers/svg";

function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
  };

  const handleNextStep = () => {
    // Validate input fields before moving to the next step
    if (step === 1 && name.trim() === "") {
      alert("Please enter your name");
    } else if (step === 2 && password.trim() === "") {
      alert("Please enter your password");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex items-center min-h-[85vh] bg-gray-50 ">
      <div className="flex-1 2xl:max-w-7xl md:max-w-[90%] max-w-[95%] mx-auto bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 md:min-h-[80vh] min-h-0">
            <img
              className="object-cover w-full h-full md:rounded-l-2xl md:rounded-r-none rounded-t-2xl"
              src="https://source.unsplash.com/user/erondu/1600x900"
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 md:min-h-[80vh] min-h-0 h-full">
            <div className="w-full">
              <div className="flex justify-center">
                <RegisterIcon />
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                {step === 1 && "Step 1: Name"}
                {step === 2 && "Step 2: Password"}
              </h1>
              {step === 1 && (
                <div>
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    className="profile-input"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <button
                    className="btn-blue-two mt-4"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              )}
              {step === 2 && (
                <div>
                  <label className="block mt-4 text-sm">Password</label>
                  <input
                    className="profile-input"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button className="btn-blue-two mt-4" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
