import React from "react";

const FormHeader = ({ text, className }) => {
  return (
    <>
      <h1 className={className ? className : "form-header-group"}>{text}</h1>
    </>
  );
};

export default FormHeader;
