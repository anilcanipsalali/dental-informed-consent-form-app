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
      <li className="w-full flex pl-9 pr-0 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Patient/Parent/Guardian Signature:"} />
        <div className="w-auto flex ml-20">
          <div className="inline-block border border-black rounded-xl">
            <ReactSignatureCanvas
              ref={signaturePad}
              onEnd={saveSignature}
              penColor="black"
              canvasProps={{ className: "w-full" }}
            />
            <button
              className="border-0 text-[13px] rounded-xl ml-1 mb-1 pt-1 pr-3 pl-3 pb-2 cursor-pointer hover:shadow-[#000000] hover:bg-gray-100"
              onClick={clearSignature}
            >
              Clear
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Signature;
