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
  const [signature, setSignature] = useState("");

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

  useEffect(() => {
    //console.log("Patient:")
    console.log(patient)
  }, [patient]);

  useEffect(() => {
    //console.log("Errors:")
    //console.log(errors)
  }, [errors]);

  return (
    <div className="main">
      <FormImage
        image={
          "https://www.jotform.com/uploads/VanessaDavid/form_files/dental-care-logo.5d23b4e54ca9a5.61850062.png"
        }
      />
      <div className="form">
        <FormHeader
          className={"form-header"}
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
        <AcknowledgmentAndWaiver setPatient={setPatient} />
        <Signature setPatient={setPatient} setErrors={setErrors} />
        <Submit errors={errors} patient={patient} />
      </div>
    </div>
  );
}

export default App;
