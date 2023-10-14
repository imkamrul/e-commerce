import { FaceBook, Google } from "@/components/Common/Icons/Index";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="container">
        <div className="w-8/12 bg-white rounded mx-auto p-[60px]  my-[150px] text-[#1C1C1C]">
          <h4 className="text-center text-2xl font-semibold ">
            Welcome to Walcart! Please Sign In.
          </h4>
          <div className="flex flex-wrap pt-5">
            <div className="w-7/12 pr-6">
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
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px]"
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
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px]"
              />
            </div>
            <div className="w-5/12 pl-5">
              <button className="text-white py-4 bg-[#D9171A] rounded block w-full my-11">
                Login
              </button>
              <button className="text-white py-[10px] bg-[#DB3325] rounded  w-full mb-3 flex items-center px-10 gap-x-7">
                <Google /> <span>Login with Gmail</span>
              </button>
              <button className="text-white py-[10px] bg-[#214497] rounded  w-full mt-1 flex items-center px-10 gap-x-7">
                <FaceBook /> <span>Login with Facebook</span>
              </button>
            </div>
          </div>

          <p className="text-center pt-20 text-base font-bold">
            Don&rsquo;t Have an Walcart account?{" "}
            <Link
              href="/user/register"
              className="text-[#D9171A] hover:underline"
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
