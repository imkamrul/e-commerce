"use client";

import { useState } from "react";

const UserInfo = () => {
  const options = [
    "Manage My Account",
    "Personal Information",
    "My Orders",
    "My Reviews",

    "Logout",
  ];
  const [current, setCurrent] = useState(options[0]);
  return (
    <>
      <div className="bg-white rounded p-[15px] w-full ">
        <div className="flex flex-col justify-center items-center ">
          <img
            src="https://avatars.githubusercontent.com/u/70765245?v=4"
            alt=""
            className="w-[121px] h-[121px] rounded-[50%] mb-5"
          />
          <p className="text-[#303030] text-base font-semibold">
            MD Kamrul Hasan
          </p>
          <p className="text-[#303030] text-base font-medium py-2">
            kamrul@gmail.com
          </p>
          <p className="text-[#303030] text-base font-medium">01830663091</p>
          <button className="text-[#2052C8] text-[12px] bg-[#CADAFF] py-[7px] px-[22px] rounded-[19px] mt-2 transform transition-transform hover:scale-105 font-medium">
            Edit
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-[3px] pt-10">
          {options?.map((item) => {
            return (
              <p
                onClick={() => setCurrent(item)}
                className={`  bg-[#F5F5F5] w-full py-[13px] px-[33px]  text-base font-medium cursor-pointer  relative ${
                  current === item
                    ? "before:absolute before:top-0 before:left-0 before:w-[7px] before:h-[100%] before:bg-[#214497] text-[#214497] transition duration-300 ease-in-out"
                    : " text-[#303030] before:hidden transition duration-300 ease-in-out"
                }`}
                key={item}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
