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
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Name and Surname:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0 ">
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.name ? "border-[#ff0000] text-[#ff0000]" : ""
              }`}
              size={30}
              onBlur={(e) =>
                validateNameAndSurname(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Name and Surname
            </h1>
            {errors.name ? (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                It is mandatory to fill in the name and surname field.
              </h1>
            ) : (
              <></>
            )}
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Identity No:"} />
        <div>
          <span className={"inline-block pt-0 pr-1 pb-0 pl-0"}>
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.identityNo ? "border-[#ff0000] text-[#ff0000]" : ""
              }`}
              size={30}
              onBlur={(e) =>
                validateIdentityNo(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Identity No
            </h1>
            {errors.identityNo ? (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                ID number does not conform to the format.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-4 pt-1">
        <FormLabel label={"Gender:"} />
        <div>
          <div className="w-full flex !items-start" role={"group"}>
            <span className="w-full inline-block pt-0 pr-2 pb-0 pl-0">
              <div>
                <input
                  type="radio"
                  className="w-4 h-4"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ gender: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  className="w-4 h-4"
                  name="gender"
                  value="Female"
                  onChange={(e) =>
                    setPatient((patient) => ({
                      ...patient,
                      ...{ gender: e.target.value },
                    }))
                  }
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-[#312547]">
                  Female
                </label>
              </div>
            </span>
          </div>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Date of Birth:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0">
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.age ? "border-[#ff0000] text-[#ff0000]" : ""
              }`}
              type="date"
              size={12}
              onBlur={(e) => validateAge(e.target.value, setErrors, setPatient)}
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Date
            </h1>
            {errors.age ? (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                The age range should be between 5 and 120.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Phone Number:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0">
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.phoneNumber ? "border-[#ff0000] text-[#ff0000]" : ""
              }`}
              size={15}
              type="tel"
              onBlur={(e) =>
                validatePhoneNumber(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Phone Number
            </h1>
            {errors.phoneNumber ? (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                Phone number must be entered in the format 05XXXXXXXXXX.
              </h1>
            ) : null}
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Email:"} />
        <div>
          <span className={"inline-block pt-0 pr-1 pb-0 pl-0"}>
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1`}
              size={30}
              onBlur={(e) =>
                setPatient((patient) => ({
                  ...patient,
                  ...{ email: e.target.value },
                }))
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Email
            </h1>
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Address:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0">
            <textarea
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-800"
              cols={55}
              rows={6}
              maxLength={300}
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
