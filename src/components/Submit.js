import React from "react";

const Submit = ({ errors, patient }) => {
  const checkErrors = (errors, patient) => {
    if (
      errors.name ||
      errors.age ||
      errors.phoneNumber ||
      errors.address ||
      errors.identityNo ||
      errors.parent.name ||
      errors.parent.phoneNumber ||
      errors.signature ||
      !patient.acceptedAcknowledgement
    )
      return true;
    else return false;
  };

  return (
    <button
      className={`form-submit-btn ${
        checkErrors(errors, patient) ? "disabled" : ""
      }`}
      disabled={checkErrors(errors, patient)}
    >
      Submit
    </button>
  );
};

export default Submit;
