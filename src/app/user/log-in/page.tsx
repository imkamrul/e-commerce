"use client";
import { FaceBook, Google } from "@/components/Common/Icons/Index";
import LogInForm from "@/components/Pages/LogInPage/LogInForm";
import notify from "@/notify/Index";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="container">
        <div className="w-1/2 bg-white rounded mx-auto p-[60px]  my-[150px] text-[#1C1C1C]">
          <h4 className="text-center text-2xl font-semibold ">
            Welcome to E-Commerce! Please Sign In.
          </h4>
          <div className="flex flex-wrap pt-5">
            <div className="w-10/12 pr-6 mx-auto">
              <LogInForm />

              <p className="text-center font-bold pb-2">Login with with</p>
              <div className="flex items-center justify-center gap-x-5">
                <button
                  className=" bg-[#ea4c89] rounded-full  w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    notify(
                      "info",
                      "This feature is not available yet, Login with email, password"
                    );
                  }}
                >
                  <Google />
                </button>
                <button
                  className=" bg-[#335BBA] rounded-full  w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    notify(
                      "info",
                      "This feature is not available yet, Login with email, password"
                    );
                  }}
                >
                  <FaceBook />
                </button>
              </div>
            </div>
          </div>

          <p className="text-center pt-10 text-base font-bold">
            Don&rsquo;t Have an E-Commerce account?{" "}
            <Link
              href="/user/register"
              className="text-[#ea4c89] hover:underline"
            >
              Please Sign Up
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
