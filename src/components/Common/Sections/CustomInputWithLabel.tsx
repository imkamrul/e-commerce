import React from "react";
import { CommonInputWithLabelProps } from "../interface-types/Index";

const CommonInputWithLabel: React.FC<CommonInputWithLabelProps> = ({
  label,
  id = "name",
  required = true,
  name,
  type = "text",
  placeholder = "Input ",
}) => {
  return (
    <>
      <label htmlFor="name" className="text-[#484242] text-sm font-medium">
        {label} {required ? <span className="text-[red]">*</span> : ""}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-[#F5F5F5]  w-full placeholder:text-[#807A7A] text-sm font-medium py-[12px] px-[20px] rounded-[5px]  outline-none"
        placeholder={placeholder}
      />
    </>
  );
};

export default CommonInputWithLabel;
