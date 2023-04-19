import React from "react";
import FormHeader from "./FormHeader";
import FormLabel from "./FormLabel";
import {
  validateAge,
  validateIdentityNo,
  validateNameAndSurname,
  validatePhoneNumber,
} from "../utils/Validation";
import FormReagent from "./FormReagent";

const PatientInformation = ({ errors, setPatient, setErrors }) => {
  return (
    <>
      <FormHeader text={"Patient Information"} />
      <li className="form-line">
        <FormLabel label={"Name and Surname:"} />
        <div>
          <span className="form-input-subcontainer">
            <input
              className={`form-textbox ${errors.name ? "error" : ""}`}
              size={30}
              onBlur={(e) =>
                validateNameAndSurname(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="form-sublabel">Name and Surname</h1>
            {errors.name ? (
              <h1 className="form-sublabel error">
                It is mandatory to fill in the name and surname field.
              </h1>
            ) : (
              <></>
            )}
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Identity No:"} />
        <div>
          <span className={"form-input-subcontainer"}>
            <input
              className={`form-textbox ${errors.identityNo ? "error" : ""}`}
              size={30}
              onBlur={(e) =>
                validateIdentityNo(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="form-sublabel">Identity No</h1>
            {errors.identityNo ? (
              <h1 className="form-sublabel error">
                ID number does not conform to the format.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="form-line-checkbox">
        <FormLabel label={"Gender:"} />
        <div>
          <div className="form-single-column" role={"group"}>
            <span className="form-input-subcontainer">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ gender: e.target.value },
                    }))
                  }
                />
                <label>Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ gender: e.target.value },
                    }))
                  }
                />
                <label>Female</label>
              </div>
            </span>
          </div>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Date of Birth:"} />
        <div>
          <span className="form-input-subcontainer">
            <input
              className={`form-textbox ${errors.age ? "error" : ""}`}
              type="date"
              size={12}
              onBlur={(e) => validateAge(e.target.value, setErrors, setPatient)}
            />
            <h1 className="form-sublabel">Date</h1>
            {errors.age ? (
              <h1 className="form-sublabel error">
                The age range should be between 5 and 120.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Phone Number:"} />
        <div>
          <span className="form-input-subcontainer">
            <input
              className={`form-textbox ${errors.phoneNumber ? "error" : ""}`}
              size={15}
              type="tel"
              onBlur={(e) =>
                validatePhoneNumber(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="form-sublabel">Phone Number</h1>
            {errors.phoneNumber ? (
              <h1 className="form-sublabel error">
                Phone number must be entered in the format 05XXXXXXXXXX.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Email:"} />
        <div>
          <span className={"form-input-subcontainer"}>
            <input
              className={`form-textbox`}
              size={30}
              onBlur={(e) =>
                setPatient((patient) => ({
                  ...patient,
                  ...{ email: e.target.value },
                }))
              }
            />
            <h1 className="form-sublabel">Email</h1>
          </span>
        </div>
      </li>
      <li className="form-line">
        <FormLabel label={"Address:"} />
        <div>
          <span className="form-input-subcontainer">
            <textarea
              cols={55}
              rows={6}
              onBlur={(e) =>
                setPatient((patient) => ({
                  ...patient,
                  ...{ address: e.target.value },
                }))
              }
            />
          </span>
        </div>
      </li>
      <FormReagent />
    </>
  );
};

export default PatientInformation;
