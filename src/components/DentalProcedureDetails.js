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
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Type of Dental Procedure:"} />
        <div>
          <div className="w-full flex !items-start" role={"group"}>
            <span className="inline-block pt-0 pr-2 pb-0 pl-2">
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Tooth Extraction"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Tooth Extraction
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Grafting"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Grafting
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Restoration"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Restoration
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Cosmetic Dentistry"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Cosmetic Dentistry
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Implants"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Implants
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Prosthetics"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Prosthetics
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Oral Sedation"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Oral Sedation
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Treatment"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Treatment
                </label>
              </div>
              <div>
                <input
                  type={"radio"}
                  className="w-4 h-4"
                  name="DentalProcedure"
                  value="Root Planing"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ dentalProcedure: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Root Planing
                </label>
              </div>
            </span>
          </div>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Do you have any allergies?"} />
        <div>
          <span className="inline-block pt-0 pr-0 pb-0 pl-3">
            <textarea
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-800"
              cols={55}
              rows={6}
              maxLength={300}
              onBlur={(e) => handleAllergies(e.target.value)}
            />
            <h1 className="text-[13px] text-[#6F6F6F] font-lighter font-mako mt-1 mr-0 mb-1 ml-1">
              If yes, then please specify it on the field above.
            </h1>
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Are you currently taking any medications?"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-3">
            <textarea
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-800"
              cols={55}
              rows={6}
              maxLength={300}
              onBlur={(e) => handleMedications(e.target.value)}
            />
            <h1 className="text-[13px] text-[#6F6F6F] font-lighter font-mako mt-1 mr-0 mb-1 ml-1">
              If yes, then please specify it on the field above.
            </h1>
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel
          label={
            "Do you have any medical conditions that we should be aware of? (Communicable disease, cardiovascular problems, diabetes, etc.)"
          }
        />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-3">
            <textarea
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-800"
              cols={55}
              rows={6}
              maxLength={300}
              onBlur={(e) => handleMedicalConditions(e.target.value)}
            />
            <h1 className="text-[13px] text-[#6F6F6F] font-lighter font-mako mt-1 mr-0 mb-1 ml-1">
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
