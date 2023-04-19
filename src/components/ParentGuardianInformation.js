import React from "react";
import FormHeader from "./FormHeader";
import FormLabel from "./FormLabel";
import FormReagent from "./FormReagent";
import {
  validateParentNameAndSurname,
  validateParentPhoneNumber,
} from "../utils/Validation";

const ParentGuardianInformation = ({ errors, setPatient, setErrors }) => {
  return (
    <>
      <FormHeader text={"Parent/Guardian Information"} />
      <li className="form-line">
        <FormLabel label={"Parent Name and Surname"} />
        <div>
          <span className="form-input-subcontainer">
            <input
              className={`form-textbox ${errors.parent.name ? "error" : ""}`}
              size={30}
              onBlur={(e) =>
                validateParentNameAndSurname(
                  e.target.value,
                  setErrors,
                  setPatient
                )
              }
            />
            <h1 className="form-sublabel">Name and Surname</h1>
            {errors.parent.name ? (
              <h1 className="form-sublabel error">
                It is mandatory to fill in the parent name and surname field.
              </h1>
            ) : (
              <></>
            )}
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Parent Phone Number"} />
        <div>
          <span className="form-input-subcontainer">
            <input
              className={`form-textbox ${
                errors.parent.phoneNumber ? "error" : ""
              }`}
              size={15}
              type="tel"
              onBlur={(e) =>
                validateParentPhoneNumber(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="form-sublabel">Phone Number</h1>
            {errors.parent.phoneNumber ? (
              <h1 className="form-sublabel error">
                Parent phone number must be entered in the format 05XXXXXXXXXX.
              </h1>
            ) : (
              <></>
            )}
          </span>
        </div>
      </li>
      <FormReagent />
    </>
  );
};

export default ParentGuardianInformation;
