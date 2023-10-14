export const isValidImage = (image: any, fileSize = 5.1) => {
  const imgType = ["image/png", "image/jpeg", "image/jpg"];
  let isValid = null;
  let warningMessage = null;
  if (image) {
    let { type, size } = image;
    var result = imgType.includes(type);
    if (!result) {
      isValid = false;
      warningMessage = "The Format is Not Supported.";
    } else if (size / 1048576 > fileSize) {
      isValid = false;
      warningMessage = "Keep Your File Less Than '5 MB'";
    } else {
      isValid = true;
      warningMessage = null;
    }
  } else {
    isValid = false;
    warningMessage = "Upload The Proof of Your Payment";
  }
  return [isValid, warningMessage];
};
const phoneRegex = /^01[3-9]\d{8}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const isValidPhoneEmail = (value: string) => {
  let isValid = null;
  let warningMessage = null;
  if (value) {
    if (phoneRegex.test(value)) {
      isValid = true;
      warningMessage = null;
    } else if (emailRegex.test(value)) {
      isValid = true;
      warningMessage = null;
    } else {
      isValid = false;
      warningMessage = "Enter a Valid Phone Number or Email Address";
    }
  } else {
    isValid = false;
    warningMessage = "Enter Your Phone Number or Email Address";
  }
  return [isValid, warningMessage];
};
export const isStrongPassword = (password: string) => {
  const lengthRegex = /.{8,}/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  let isValid = null;
  let warningMessage = null;

  if (
    lengthRegex.test(password) &&
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    isValid = true;
    warningMessage = null;
  } else {
    isValid = false;
    warningMessage =
      "Password requirements: 8 characters, lowercase, uppercase, digit, special character. Your password doesn't meet the criteria.";
  }

  return [isValid, warningMessage];
};

export const isValidEmail = (value: string) => {
  let isValid = null;
  let warningMessage = null;
  if (value) {
    if (emailRegex.test(value)) {
      isValid = true;
      warningMessage = null;
    } else {
      isValid = false;
      warningMessage = "Enter a Valid Email Address";
    }
  } else {
    isValid = false;
    warningMessage = "Enter Your Email Address";
  }
  return [isValid, warningMessage];
};
export const isValidPhone = (value: string) => {
  let isValid = null;
  let warningMessage = null;
  if (value) {
    if (phoneRegex.test(value)) {
      isValid = true;
      warningMessage = null;
    } else {
      isValid = false;
      warningMessage = "Enter a Valid Phone Number";
    }
  } else {
    isValid = false;
    warningMessage = "Enter Your Phone Number";
  }
  return [isValid, warningMessage];
};

export const isValidFullName = (value: string) => {
  const fullNameRegex = /^[A-Za-z\s\-']+(\.[A-Za-z\s\-']+)?$/;

  let isValid = null;
  let warningMessage = null;

  if (value) {
    if (fullNameRegex.test(value)) {
      isValid = true;
      warningMessage = null;
    } else {
      isValid = false;
      warningMessage = "Enter a Valid Full Name";
    }
  } else {
    isValid = false;
    warningMessage = "Enter Your Full Name";
  }

  return [isValid, warningMessage];
};
