import React from "react";
import { useSelector } from "react-redux";

const ContactPage = ({ contactInputs, handleContactInputChange }) => {
  const contactPageInputs = useSelector(
    (state) => state.config.contactPageInputs
  );

  return (
    <div>
      {Object.entries(contactPageInputs)
        .filter(([, enabled]) => enabled)
        .map(([key]) => (
          <div key={key}>
            <label className="block mt-4 text-sm">{key}</label>
            <input
              className="profile-input"
              placeholder={`Enter ${key}`}
              value={contactInputs[key] || ""}
              onChange={(e) => handleContactInputChange(key, e.target.value)}
            />
          </div>
        ))}
    </div>
  );
};

export default ContactPage;
