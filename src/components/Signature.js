import React, { useRef } from "react";
import FormLabel from "./FormLabel";
import ReactSignatureCanvas from "react-signature-canvas";
import FormHeader from "./FormHeader";

const Signature = ({ setPatient, setErrors }) => {
  let signaturePad = useRef({});

  const clearSignature = () => {
    signaturePad.current.clear();
    setPatient((patient) => ({
      ...patient,
      ...{ signature: "" },
    }));
    setErrors((errors) => ({
      ...errors,
      ...{ signature: true },
    }));
  };

  const saveSignature = () => {
    setPatient((patient) => ({
      ...patient,
      ...{ signature: signaturePad.current.toDataURL("image/png") },
    }));
    setErrors((errors) => ({
      ...errors,
      ...{ signature: false },
    }));
  };

  return (
    <>
      <FormHeader text={"Signature"} />
      <li className="form-line">
        <FormLabel label={"Patient/Parent/Guardian Signature"} />
        <div className="form-single-column">
          <div
            className="form-input-subcontainer"
            style={{
              borderStyle: "solid",
              borderColor: "black",
              borderWidth: "2.5px",
            }}
          >
            <ReactSignatureCanvas
              ref={signaturePad}
              onEnd={saveSignature}
              penColor="black"
              canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
            />
            <button className="btn" onClick={clearSignature}>
              Clear
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Signature;
