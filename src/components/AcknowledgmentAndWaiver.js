import React from "react";
import FormHeader from "./FormHeader";
import FormReagent from "./FormReagent";
import PdfViewerComponent from "./PDFViewer";
import toothExtractionPDF from "../pdf/default.pdf";
import graftingPDF from "../pdf/default.pdf";
import restorationPDF from "../pdf/default.pdf";
import cosmeticDentistryPDF from "../pdf/default.pdf";
import implantsPDF from "../pdf/default.pdf";
import prostheticsPDF from "../pdf/default.pdf";
import oralSedationPDF from "../pdf/default.pdf";
import treatmentPDF from "../pdf/default.pdf";
import rootPlaningPDF from "../pdf/default.pdf";

const AcknowledgmentAndWaiver = ({ patient, setPatient }) => {
  const selectDocument = (procedure) => {
    switch (procedure) {
      case "Tooth Extraction":
        return toothExtractionPDF;
      case "Grafting":
        return graftingPDF;
      case "Restoration":
        return restorationPDF;
      case "Cosmetic Dentistry":
        return cosmeticDentistryPDF;
      case "Implants":
        return implantsPDF;
      case "Prosthetics":
        return prostheticsPDF;
      case "Oral Sedation":
        return oralSedationPDF;
      case "Treatment":
        return treatmentPDF;
      case "Root Planing":
        return rootPlaningPDF;
      default:
        return null;
    }
  };

  return (
    <>
      {patient.dentalProcedure ? (
        <>
          <FormHeader text={"Acknowledgment and Waiver"} />
          <div className="flex w-full justify-center border border-1 border-[#808080]">
            <PdfViewerComponent
              document={selectDocument(patient.dentalProcedure)}
            />
          </div>
          <div className="inline-flex pt-6 pr-4 pb-6 pl-4">
            <div className="mt-2 mb-1 w-full flex-start flex-wrap">
              <input
                type="checkbox"
                onChange={(e) =>
                  setPatient((patient) => ({
                    ...patient,
                    ...{ acceptedAcknowledgement: e.target.checked },
                  }))
                }
              />
              <label className="pl-2">
                I allow and authorize (Dental Care Clinic) to perform this
                procedure to me. The doctor explained the nature of the
                treatment and how it will help me.
              </label>
            </div>
          </div>
          <FormReagent />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AcknowledgmentAndWaiver;
