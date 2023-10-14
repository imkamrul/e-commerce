"use client";
import { Cart, RedTriangle, RightArrow } from "@/components/Common/Icons/Index";
import useCountdownTimer from "@/hooks/useCountdownTimer";
import Link from "next/link";

const DailyProducts = () => {
  const offerEndDate = new Date().getTime() + 1 * 60 * 60 * 1000; // Replace this with the actual offer
  const timeRemaining = useCountdownTimer(offerEndDate);
  const data = [
    {
      name: "Cell Phone",
      imgName: "top-img (1).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (2).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (3).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (4).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (5).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (6).png",
    },
  ];
  return (
    <>
      <section className="container py-10">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center">
            <p className="text-[#303030] text-2xl font-semibold">
              Daily Discount Product
            </p>
            <p className="pl-5 text-[#0F0F0F] text-base font-medium flex items-center">
              Ends After{" "}
              <span className="flex text-center items-center gap-x-[8px] pl-5">
                <span className="text-[] bg-[#214497] rounded-[2px] text-white h-[30px] w-[35px] flex justify-center items-center ">
                  {" "}
                  {String(timeRemaining.hours).padStart(2, "0")}
                </span>
                :
                <span className="text-[] bg-[#214497] rounded-[2px] text-white h-[30px] w-[35px] flex justify-center items-center ">
                  {" "}
                  {String(timeRemaining.minutes).padStart(2, "0")}
                </span>
                :
                <span className="text-[] bg-[#214497] rounded-[2px] text-white h-[30px] w-[35px] flex justify-center items-center ">
                  {" "}
                  {String(timeRemaining.seconds).padStart(2, "0")}
                </span>
              </span>
            </p>
          </div>
          <Link
            href="/"
            className="text-[#303030] text-lg flex items-center gap-x-[6px] hover:underline hover:text-[#214497]"
          >
            <span> See All </span>

            <RightArrow />
          </Link>
        </div>

        <div className="flex flex-wrap pt-10">
          {data.map((item, index) => {
            return (
              <div className="w-2/12 px-2" key={index}>
                <div
                  className={`bg-[#FFF] rounded-[6px] shadow-[0px_2px_53px_0px_rgba(0,0,0,0.03)] p-[10px] ${
                    index === 5 && "relative overflow-hidden"
                  }`}
                >
                  {index === 5 && (
                    <div className=" absolute top-0 left-0 text-white text-[12px] ">
                      <div className="relative">
                        <RedTriangle />
                        <p className=" -rotate-45 absolute top-[8px] left-[3px]">
                          {" "}
                          New
                        </p>
                      </div>
                    </div>
                  )}
                  <img
                    src={`/home/top-bar/${item.imgName}`}
                    alt=""
                    className="w-full"
                  />
                  <div className="bg-[white]">
                    <Link
                      href="/"
                      className="text-[#2E2E2E] hover:text-[#214497] text-base font-medium mt-5 block hover:underline"
                    >
                      Men Black Sports
                    </Link>
                    <p className="text-sm font-medium text-[#2E2E2E] flex items-center gap-x-2">
                      BDT - 19200{" "}
                      <span className="line-through text-[#545454] text-[10px]">
                        19200
                      </span>
                    </p>

                    <div className="flex justify-between pt-3 items-center">
                      <p className="bg-[#E63C49] text-white py-[7px] px-4 rounded-[20px] text-[10px]">
                        12% off
                      </p>
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default DailyProducts;
