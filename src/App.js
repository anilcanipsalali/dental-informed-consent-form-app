import PatientInformation from "./components/PatientInformation";
import "./App.css";
import FormReagent from "./components/FormReagent";
import DentalProcedureDetails from "./components/DentalProcedureDetails";
import FormHeader from "./components/FormHeader";
import FormImage from "./components/FormImage";
import AcknowledgmentAndWaiver from "./components/AcknowledgmentAndWaiver";
import ParentGuardianInformation from "./components/ParentGuardianInformation";
import Signature from "./components/Signature";
import { useEffect, useState } from "react";
import Submit from "./components/Submit";

function App() {
  const [patient, setPatient] = useState({
    name: "",
    gender: "",
    age: "",
    phoneNumber: "",
    email: "",
    identityNo: "",
    address: "",
    isPatientMinor: false,
    dentalProcedure: "",
    parent: {
      name: "",
      phoneNumber: "",
    },
    hasAllergy: false,
    allergy: "",
    useMedication: false,
    medication: "",
    hasMedicalCondition: false,
    medicalCondition: "",
    acceptedAcknowledgement: false,
    signature: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    age: false,
    phoneNumber: false,
    identityNo: false,
    parent: {
      name: false,
      phoneNumber: false,
    },
    signature: true,
  });

  //TEST PATIENT
  useEffect(() => {
    //console.log("Patient:")
    //console.log(patient);
  }, [patient]);

  //TEST ERRORS
  useEffect(() => {
    //console.log("Errors:")
    //console.log(errors)
  }, [errors]);

  return (
    <div className="bg-neutral-800 w-full pb-5 pt-5 h-full h-full">
      <FormImage
        image={
          "https://www.jotform.com/uploads/VanessaDavid/form_files/dental-care-logo.5d23b4e54ca9a5.61850062.png"
        }
      />
      <div className="container mx-auto px-4 w-4/12 center bg-white rounded-xl">
        <FormHeader
          className={"text-4xl text-[#312547 text-center font-mako mt-3 mr-4 mb-3 ml-9 pt-6 pb-6"}
          text={"Dental Informed Consent Form"}
        />
        <FormReagent />
        <PatientInformation
          errors={errors}
          setPatient={setPatient}
          setErrors={setErrors}
        />
        {patient.isPatientMinor ? (
          <ParentGuardianInformation
            errors={errors}
            setPatient={setPatient}
            setErrors={setErrors}
          />
        ) : null}
        <DentalProcedureDetails setPatient={setPatient} />
        <AcknowledgmentAndWaiver patient={patient} setPatient={setPatient} />
        <Signature setPatient={setPatient} setErrors={setErrors} />
        <Submit errors={errors} patient={patient} />
      </div>
    </div>
  );
}

export default App;
