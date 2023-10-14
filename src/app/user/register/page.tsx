import { FaceBook, Google } from "@/components/Common/Icons/Index";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="container">
        <div className="w-1/2 bg-white rounded mx-auto p-[60px]  my-[150px] text-[#1C1C1C]">
          <h4 className="text-center text-2xl font-semibold ">
            Welcome to E-Commerce! Please Sign Up.
          </h4>
          <div className="flex flex-wrap pt-5">
            <div className="w-10/12 pr-6 mx-auto">
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
                placeholder="Enter your email "
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
              <label
                htmlFor="emailPhone"
                className="text-base font-medium pb-2 block"
              >
                Email <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="emailPhone"
                id="emailPhone"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px] focus:outline-0"
              />
              <label
                htmlFor="emailPhone"
                className="text-base font-medium pb-2 block"
              >
                Mobile phone number <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                name="emailPhone"
                id="emailPhone"
                placeholder="Enter your email or mobile phone number"
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px]
                focus:outline-none
                "
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
                className="w-full border border-[#E2E2E2] bg-[#F3F9FF] rounded p-[15px] my-[10px]
                focus:outline-none
                "
              />
              <button className="text-white py-4 bg-[#ea4c89] rounded block w-full mb-11 mt-3">
                Login
              </button>
              <p className="text-center font-bold pb-2">Sing up with</p>
              <div className="flex items-center justify-center gap-x-5">
                <button className=" bg-[#ea4c89] rounded-full  w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                  <Google />
                </button>
                <button className=" bg-[#335BBA] rounded-full  w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                  <FaceBook />
                </button>
              </div>
            </div>
          </div>

          <p className="text-center pt-10 text-base font-bold">
            Already have an E-Commerce account?{" "}
            <Link
              href="/user/log-in"
              className="text-[#ea4c89] hover:underline"
            >
              Please Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
