import React from "react";
import FormHeader from "./FormHeader";
import FormLabel from "./FormLabel";
import FormReagent from "./FormReagent";

const DentalProcedureDetails = ({ setPatient }) => {
  const handleAllergies = (allergy) => {
    if (allergy === "") {
      setPatient((patient) => ({ ...patient, ...{ hasAllergy: false } }));
    } else {
      setPatient((patient) => ({ ...patient, ...{ hasAllergy: true } }));
    }
    setPatient((patient) => ({ ...patient, ...{ allergy: allergy } }));
  };

  const handleMedications = (medication) => {
    if (medication === "") {
      setPatient((patient) => ({ ...patient, ...{ useMedication: false } }));
    } else {
      setPatient((patient) => ({ ...patient, ...{ useMedication: true } }));
    }
    setPatient((patient) => ({ ...patient, ...{ medication: medication } }));
  };

  const handleMedicalConditions = (medicalCondition) => {
    if (medicalCondition === "") {
      setPatient((patient) => ({
        ...patient,
        ...{ hasMedicalCondition: false },
      }));
    } else {
      setPatient((patient) => ({
        ...patient,
        ...{ hasMedicalCondition: true },
      }));
    }
    setPatient((patient) => ({
      ...patient,
      ...{ medicalCondition: medicalCondition },
    }));
  };

  return (
    <>
      <FormHeader text={"Dental Procedure Details"} />
      <li className="form-line-checkbox">
        <FormLabel label={"Type of Dental Procedure"} />
        <div>
          <div className="form-single-column" role={"group"}>
            <span className="form-input-subcontainer">
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Tooth Extraction"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Tooth Extraction</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Grafting"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Grafting</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Restoration"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Restoration</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Cosmetic Dentistry"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Cosmetic Dentistry</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Implants"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Implants</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Prosthetics"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Prosthetics</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Oral Sedation"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Oral Sedation</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Treatment"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Treatment</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="DentalProcedure"
                  value="Root Planing"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label>Root Planing</label>
              </div>
            </span>
          </div>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Do you have any allergies?"} />
        <div>
          <span className="form-input-subcontainer">
            <textarea
              cols={55}
              rows={6}
              onBlur={(e) => handleAllergies(e.target.value)}
            />
            <h1 className="form-sublabel-bottom">
              If yes, then please specify it on the field above.
            </h1>
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Are you currently taking any medications?"} />
        <div>
          <span className="form-input-subcontainer">
            <textarea
              cols={55}
              rows={6}
              onBlur={(e) => handleMedications(e.target.value)}
            />
            <h1 className="form-sublabel-bottom">
              If yes, then please specify it on the field above.
            </h1>
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel
          label={
            "Do you have any medical conditions that we should be aware of? (Communicable disease, cardiovascular problems, diabetes, etc.)"
          }
        />
        <div>
          <span className="form-input-subcontainer">
            <textarea
              cols={55}
              rows={6}
              onBlur={(e) => handleMedicalConditions(e.target.value)}
            />
            <h1 className="form-sublabel-bottom">
              If yes, then please specify it on the field above.
            </h1>
          </span>
        </div>
      </li>
      <FormReagent />
    </>
  );
};

export default DentalProcedureDetails;
