import React from "react";

const FormHeader = ({ text, className }) => {
  return (
    <>
      <h1
        className={
          className
            ? className
            : "text-2xl text-[#312547] text-left mt-3 mr-4 mb-3 ml-5 pt-6 pr-0 pb-6 pl-0 font-mako"
        }
      >
        {text}
      </h1>
    </>
  );
};

export default FormHeader;
