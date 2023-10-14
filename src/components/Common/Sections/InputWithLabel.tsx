"use client";
import React, { useState } from "react";
import { OpenCLoseEye } from "../Icons/Index";
import { InputWithLabelProps } from "../interface-types/Index";

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  name,
  type,
  placeholder,
  getValue,
  errorMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <label htmlFor="emailPhone" className="text-base font-medium pb-2 block">
        {label} <span className="text-[red]">*</span>
      </label>
      <div className="w-full relative">
        <input
          type={isOpen ? "text" : type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px]  focus:outline-none"
          onChange={getValue}
          required
        />
        {type === "password" && (
          <span
            className="cursor-pointer absolute right-3 translate-y-[28px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <OpenCLoseEye open={isOpen} />
          </span>
        )}
      </div>

      {errorMessage && (
        <p className="text-[red] text-sm font-medium">{errorMessage}</p>
      )}
    </>
  );
};

export default InputWithLabel;
