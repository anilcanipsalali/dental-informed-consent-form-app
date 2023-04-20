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
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Name and Surname:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0">
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.parent.name ? "border-[#ff0000] text-[#ff0000]" : ""
              }`}
              size={30}
              onBlur={(e) =>
                validateParentNameAndSurname(
                  e.target.value,
                  setErrors,
                  setPatient
                )
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Name and Surname
            </h1>
            {errors.parent.name && (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                It is mandatory to fill in the parent name and surname field.
              </h1>
            )}
          </span>
        </div>
      </li>
      <li className="w-full inline-flex pl-9 pr-2 pb-3 pt-1 pb-3 pt-1">
        <FormLabel label={"Phone Number:"} />
        <div>
          <span className="inline-block pt-0 pr-1 pb-0 pl-0">
            <input
              className={`border w-full border-gray-800 !text-black text-sm rounded-lg p-1 ${
                errors.parent.phoneNumber
                  ? "border-[#ff0000] text-[#ff0000]"
                  : ""
              }`}
              size={15}
              type="tel"
              onBlur={(e) =>
                validateParentPhoneNumber(e.target.value, setErrors, setPatient)
              }
            />
            <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1">
              Phone Number
            </h1>
            {errors.parent.phoneNumber && (
              <h1 className="text-[11px] font-mako font-bold text-[#6f6f6f] mt-1 ml-1 mb-1 border-[#ff0000] text-[#ff0000]">
                Parent phone number must be entered in the format 05XXXXXXXXXX.
              </h1>
            )}
          </span>
        </div>
      </li>
      <FormReagent />
    </>
  );
};

export default ParentGuardianInformation;
