import React from "react";
import FormHeader from "./FormHeader";
import FormReagent from "./FormReagent";
import PdfViewerComponent from "./PDFViewer";
import homework from "../pdf/default.pdf";

const AcknowledgmentAndWaiver = ({ setPatient }) => {
  return (
    <>
      <FormHeader text={"Acknowledgment and Waiver"} />
      <div className="dental-procedure-pdf">
        <PdfViewerComponent document={homework} />
      </div>
      <div className="form-line-checkbox-acknowledge">
        <div className="form-checkbox-item">
          <input
            type="checkbox"
            className="form-line-checkbox-acknowledge"
            onChange={(e) =>
              setPatient((patient) => ({
                ...patient,
                ...{ acceptedAcknowledgement: e.target.checked },
              }))
            }
          />
          <label>
            I allow and authorize (Dental Care Clinic) to perform this procedure
            to me. The doctor explained the nature of the treatment and how it
            will help me.
          </label>
        </div>
      </div>
      <FormReagent />
    </>
  );
};

export default AcknowledgmentAndWaiver;
