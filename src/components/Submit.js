import { Document, PDFDownloadLink } from "@react-pdf/renderer";
import PatientPDF from './PatientPDF';
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
    <>
      <PDFDownloadLink
        document={patient.signature ? <PatientPDF patient={patient} /> : <Document></Document>}
        fileName={fileName()}
        style={{ textDecoration: "none" }}
      >
        {({ loading }) => (
          <button
            className={`form-submit-btn ${
              checkErrors(errors, patient) ? "disabled" : ""
            }`}
            disabled={checkErrors(errors, patient) || loading}
          >
            Submit
          </button>
        )}
      </PDFDownloadLink>
    </>
  );
};

export default Submit;
