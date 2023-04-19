import { dateToAge } from "./Utils";

export const validIdentityNo = RegExp(
  /([1-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])/
);

export const validPassword = RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

export const validPhoneNumber = RegExp(
  /^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/g
);

export const validateNameAndSurname = (name, setErrors, setPatient) => {
  if (name === "") {
    setErrors((errors) => ({
      ...errors,
      ...{ name: true },
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      ...{ name: false },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ name: name },
    }));
  }
};

export const validateParentNameAndSurname = (name, setErrors, setPatient) => {
  debugger;
  if (name === "") {
    setErrors((errors) => ({
      ...errors,
      ...{
        parent: {
          name: true,
        },
      },
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      ...{
        parent: {
          name: false,
        },
      },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{
        parent: {
          name: name,
        },
      },
    }));
  }
};

export const validatePhoneNumber = (phoneNumber, setErrors, setPatient) => {
  if (!validPhoneNumber.test(phoneNumber)) {
    setErrors((errors) => ({ ...errors, ...{ phoneNumber: true } }));
  } else {
    setErrors((errors) => ({ ...errors, ...{ phoneNumber: false } }));
    setPatient((patient) => ({ ...patient, ...{ phoneNumber: phoneNumber } }));
  }
};

export const validateParentPhoneNumber = (
  phoneNumber,
  setErrors,
  setPatient
) => {
  if (!validPhoneNumber.test(phoneNumber)) {
    setErrors((errors) => ({
      ...errors,
      ...{ parent: { phoneNumber: true } },
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      ...{ parent: { phoneNumber: false } },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ parent: { phoneNumber: phoneNumber } },
    }));
  }
};

export const validateAge = (dateOfBirth, setErrors, setPatient) => {
  const age = dateToAge(dateOfBirth);

  if (age < 5 || age > 120) {
    setErrors((errors) => ({
      ...errors,
      ...{ age: true },
    }));
  } else if (age <= 18) {
    setErrors((errors) => ({
      ...errors,
      ...{ age: false },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ age: age },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ isPatientMinor: true },
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      ...{ age: false },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ age: age },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ isPatientMinor: false },
    }));
  }
};

export const validateIdentityNo = (identityNo, setErrors, setPatient) => {
  if (!validIdentityNo.test(identityNo)) {
    setErrors((errors) => ({
      ...errors,
      ...{ identityNo: true },
    }));
  } else {
    setErrors((errors) => ({
      ...errors,
      ...{ identityNo: false },
    }));
    setPatient((patient) => ({
      ...patient,
      ...{ identityNo: identityNo },
    }));
  }
};
