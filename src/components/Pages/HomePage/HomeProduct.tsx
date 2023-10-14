import { Cart, RedTriangle } from "@/components/Common/Icons/Index";
import Link from "next/link";

const HomeProduct = () => {
  const filter = ["Best Offer", "Walton", "Best Seller", "New Arrival"];
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
          </div>
          <div className="flex gap-x-[30px]">
            {filter.map((item, index) => {
              return (
                <p
                  key={index}
                  className={`${
                    index === 0
                      ? "text-white bg-[#214497] rounded-[2px]"
                      : "text-[#2E2E2E]"
                  } py-[2px] px-[15px] text-sm font-medium cursor-pointer`}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap pt-10 gap-y-3">
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
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="inline-block  mx-auto bg-[#214497] text-center mt-10 text-white py-[10px] px-6 rounded text-lg font-semibold"
          >
            View More Products
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeProduct;
