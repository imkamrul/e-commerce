"use client";
import { MyProfileTabList } from "@/components/Common/Constant/Constant";
import React from "react";

const UserInfo: React.FC<{
  setCurrent: (item: string) => void;
  current: string;
}> = ({ setCurrent, current }) => {
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
        </div>
        <div className="flex flex-col justify-center items-start gap-y-[3px] pt-10">
          {MyProfileTabList?.map((item) => {
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
