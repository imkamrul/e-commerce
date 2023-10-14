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
export const isValidPhoneEmail = (value: string) => {
  const phoneRegex = /^01[3-9]\d{8}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
  const lengthRegex = /.{8,}/; // Minimum length of 8 characters
  const lowercaseRegex = /[a-z]/; // At least one lowercase letter
  const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
  const digitRegex = /\d/; // At least one digit
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/; // At least one special character (customize this set)

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
