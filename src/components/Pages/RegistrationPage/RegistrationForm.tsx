"use client";
import InputWithLabel from "@/components/Common/Sections/InputWithLabel";
import {
  isStrongPassword,
  isValidEmail,
  isValidFullName,
  isValidPhone,
} from "@/utils/Index";
import { useState } from "react";
const RegistrationForm = () => {
  const [registerData, setRegisterData] = useState<any>({});

  const [errorMessage, setErrorMessage] = useState<any>({
    name: null,
    password: null,
    email: null,
    phoneNumber: null,
    cpassword: null,
  });

  const handleRegister = (e: any) => {
    e.preventDefault();

    const [isValidName, nameError] = isValidFullName(registerData.name);
    if (!isValidName) {
      setErrorMessage({ ...errorMessage, name: nameError });
      return;
    }

    const [isValidNumber, phoneError] = isValidPhone(registerData.phoneNumber);
    if (!isValidNumber) {
      setErrorMessage({ ...errorMessage, phoneNumber: phoneError });
      return;
    }

    const [isEmailValid, emailError] = isValidEmail(registerData.email);
    if (!isEmailValid) {
      setErrorMessage({ ...errorMessage, email: emailError });
      return;
    }

    const [isValidPassword, passwordError] = isStrongPassword(
      registerData.password
    );
    if (!isValidPassword) {
      setErrorMessage({ ...errorMessage, password: passwordError });
      return;
    }

    if (registerData.password !== registerData.cpassword) {
      setErrorMessage({
        ...errorMessage,
        cpassword: "Password not matched",
        password: "Password not matched",
      });
      return;
    }
    console.log("registerData :", registerData);
  };
  return (
    <>
      <form onSubmit={handleRegister}>
        <InputWithLabel
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, name: null });
            setRegisterData({
              ...registerData,
              [e.target.name]: e.target.value,
            });
          }}
          errorMessage={errorMessage?.name}
        />
        <InputWithLabel
          label="Phone Number"
          name="phoneNumber"
          type="text"
          placeholder="Enter your phone number"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, phoneNumber: null });
            setRegisterData({
              ...registerData,
              [e.target.name]: e.target.value,
            });
          }}
          errorMessage={errorMessage?.phoneNumber}
        />
        <InputWithLabel
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your full email"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, email: null });
            setRegisterData({
              ...registerData,
              [e.target.name]: e.target.value,
            });
          }}
          errorMessage={errorMessage?.email}
        />
        <InputWithLabel
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, password: null });
            setRegisterData({
              ...registerData,
              [e.target.name]: e.target.value,
            });
          }}
          errorMessage={errorMessage?.password}
        />
        <InputWithLabel
          label="Confirm Password"
          name="cpassword"
          type="password"
          placeholder="Enter your  password again"
          getValue={(e) => {
            setErrorMessage({ ...errorMessage, cpassword: null });
            setRegisterData({
              ...registerData,
              [e.target.name]: e.target.value,
            });
          }}
          errorMessage={errorMessage?.cpassword}
        />
        <button
          type="submit"
          className="text-white py-4 bg-[#ea4c89] rounded block w-full mb-11 mt-3"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
