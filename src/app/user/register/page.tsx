import { FaceBook, Google } from "@/components/Common/Icons/Index";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="container">
        <div className="w-8/12 bg-white rounded mx-auto p-[60px]  my-[150px] text-[#1C1C1C]">
          <h4 className="text-center text-2xl font-semibold ">
            Welcome to Walcart! Please Sign Up
          </h4>
          <div className="flex flex-wrap pt-5">
            <div className="w-7/12 pr-6">
              <label
                htmlFor="name"
                className="text-base font-medium pb-2 block"
              >
                Full Name <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
              <label
                htmlFor="emailPhone"
                className="text-base font-medium pb-2 block"
              >
                Email or mobile phone number{" "}
                <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="emailPhone"
                id="emailPhone"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
              <label
                htmlFor="password"
                className="text-base font-medium pb-2 block pt-3"
              >
                Password <span className="text-[red]">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
              <label
                htmlFor="cpassword"
                className="text-base font-medium pb-2 block pt-3"
              >
                Confirm Password <span className="text-[red]">*</span>
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
            </div>
            <div className="w-5/12 pl-5 pt-11">
              <div className="flex items-start pb-9">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 mt-1"
                />
                <label htmlFor="default-checkbox" className="ml-2 text-sm">
                  By creating an account, you agree to Amazon&aposs Conditions
                  of Use and Privacy Notice.
                </label>
              </div>

              <button className="text-white py-4 bg-[#D9171A] rounded block w-full mb-11">
                Sign Up
              </button>
              <p className="text-base font-bold my-2">Or , Sign up with</p>
              <button className="text-white py-[10px] bg-[#DB3325] rounded  w-full mb-3 flex items-center px-8 gap-x-7">
                <Google /> <span>Sign Up with Gmail</span>
              </button>
              <button className="text-white py-[10px] bg-[#214497] rounded  w-full mt-1 flex items-center px-8 gap-x-7">
                <FaceBook /> <span>Sign Up with Facebook</span>
              </button>
            </div>
          </div>

          <p className="text-center pt-20 text-base font-bold">
            Have an Walcart account?{" "}
            <Link href="/user/login" className="text-[#D9171A] hover:underline">
              Please Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
