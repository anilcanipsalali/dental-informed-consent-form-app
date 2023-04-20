import { Document, PDFDownloadLink } from "@react-pdf/renderer";
import PatientPDF from "./PatientPDF";
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

  const fileName = () => {
    const patientName = patient.name.split(" ");
    let fileName = "";
    for (var i = 0; i < patientName.length; i++) {
      fileName += patientName[i] + "_";
    }
    fileName += getDate();
    return fileName;
  };

  const getDate = () => {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + mm + yyyy;
  };

  return (
    <div className="pb-5 pt-5 flex justify-center">
      <PDFDownloadLink
        document={
          patient.signature ? (
            <PatientPDF patient={patient} />
          ) : (
            <Document></Document>
          )
        }
        fileName={fileName()}
        className={`bg-[#4CAF50] m-0 text-[16px] justify-center text-center text-white border pt-2 pr-5 pb-2 pl-5 w-2/12 rounded-xl no-underline ${
          checkErrors(errors, patient) ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {({ loading }) => (
          <button disabled={checkErrors(errors, patient) || loading}>
            Submit
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default Submit;
