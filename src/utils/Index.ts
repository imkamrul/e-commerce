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
