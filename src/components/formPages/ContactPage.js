import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContactPageData } from "../../features/configSlice";
// import { setContactPageData } from "../features/configSlice";

const ContactPage = ({ contactInputs }) => {
  const dispatch = useDispatch();
  const contactPageInputs = useSelector(
    (state) => state.config.contactPageInputs
  );

  const handleContactInputChange = (key, value) => {
    dispatch(setContactPageData({ [key]: value }));
  };

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
