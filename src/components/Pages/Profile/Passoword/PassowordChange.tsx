"use client";

import CommonInputWithLabel from "@/components/Common/Sections/CustomInputWithLabel";

const PasswordChange = () => {
  return (
    <>
      <div className="py-[28px] px-10 rounded bg-white mb-8">
        <div className="flex flex-wrap pt-3">
          <div className="w-1/2 flex flex-col gap-y-2 pr-5">
            <CommonInputWithLabel
              type="text"
              name="name"
              id="name"
              required
              placeholder="Input Full Name"
              label="Old Password"
            />
            <CommonInputWithLabel
              type="text"
              name="name"
              id="name"
              required
              placeholder="Input Full Name"
              label="New Password"
            />
            <CommonInputWithLabel
              type="text"
              name="name"
              id="name"
              required
              placeholder="Input Full Name"
              label="Confirm Password"
            />
          </div>
        </div>

        <div className="flex justify-start pt-5">
          <button className="bg-[#CD2027] text-white text-sm font-medium rounded-[5px] px-[50px] py-[13px]">
            Update Password
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordChange;
