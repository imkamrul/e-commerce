"use client";
import { useId } from "react";
import ReactSelect from "react-select";

const CommonSelectWithLabel = (props: any) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "none",
      outline: "none",
      background: "#F5F5F5",
      width: "100%",
      padding: "4px 20px",
      position: "relative",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#c7c7c7",
      outline: "none",
    }),
  };
  return (
    <>
      <ReactSelect
        {...props}
        styles={customStyles}
        isClearable
        instanceId={useId()}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          outline: "none",
          outlineWidth: 0,
          colors: {
            ...theme.colors,
            primary25: "#dddbff",
            primary: "#635bff",
          },
        })}
      />
    </>
  );
};

export default CommonSelectWithLabel;
