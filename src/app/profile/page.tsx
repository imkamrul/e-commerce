"use client";
import { MyProfileTabList } from "@/components/Common/Constant/Constant";
import UserOrder from "@/components/Pages/Profile/Orders/UserOrder";
import UserPasswordChange from "@/components/Pages/Profile/Passoword/PasswordChange";
import UserProducts from "@/components/Pages/Profile/Products/UserProducts";
import PersonalInformation from "@/components/Pages/Profile/Profile/PersonalInformation";
import UserInfo from "@/components/Pages/Profile/Profile/UserInfo";
import { useState } from "react";

const Page = () => {
  const [current, setCurrent] = useState(MyProfileTabList[0]);
  return (
    <>
      <section className="container flex flex-warp py-[70px]">
        <div className="w-3/12">
          <UserInfo setCurrent={setCurrent} current={current} />
        </div>
        <div className="w-9/12 pl-6">
          {MyProfileTabList[0] === current && (
            <>
              <PersonalInformation />
            </>
          )}
          {MyProfileTabList[1] === current && (
            <>
              <UserPasswordChange />
            </>
          )}

          {MyProfileTabList[2] === current && (
            <>
              <UserProducts />
            </>
          )}
          {MyProfileTabList[3] === current && (
            <>
              <UserOrder />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
