"use client";
import InputWithLabel from "@/components/Common/Sections/InputWithLabel";
import { isStrongPassword, isValidPhoneEmail } from "@/utils/Index";
import { useState } from "react";

const LogInForm = () => {
  const [logInData, setLogInData] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<any>({
    password: null,
    emailPhone: null,
  });
  console.log("logInData :", logInData);
  const handleLogIn = (e: any) => {
    e.preventDefault();

    const [isValidEmailPhone, emailPhoneError] = isValidPhoneEmail(
      logInData.emailPhone
    );
    if (!isValidEmailPhone) {
      setErrorMessage({ ...errorMessage, emailPhone: emailPhoneError });
      return;
    }
    const [isValidPassword, passwordError] = isStrongPassword(
      logInData.password
    );
    if (!isValidPassword) {
      setErrorMessage({ ...errorMessage, password: passwordError });
      return;
    }
    console.log("isValidEmailPhone :", isValidEmailPhone, emailPhoneError);
    console.log("isValidPassword :", isValidPassword, passwordError);
    console.log("logInData :", logInData);
  };
  return (
    <>
      <form onSubmit={handleLogIn}>
        <InputWithLabel
          label="Email or mobile phone number"
          name="emailPhone"
          type="text"
          placeholder="01********/example@email.com"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, emailPhone: null });
            setLogInData({ ...logInData, [e.target.name]: e.target.value });
          }}
          errorMessage={errorMessage?.emailPhone}
        />
        <InputWithLabel
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, password: null });
            setLogInData({ ...logInData, [e.target.name]: e.target.value });
          }}
          errorMessage={errorMessage?.password}
        />
        <button
          type="submit"
          className="text-white py-4 bg-[#ea4c89] rounded block w-full mb-11 mt-3"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LogInForm;
