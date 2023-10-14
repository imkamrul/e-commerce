import { Cart, RedTriangle, RightArrow } from "@/components/Common/Icons/Index";
import Link from "next/link";

const LoveMoreProducts = () => {
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
      <section className="container pt-6 pb-10">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center">
            <p className="text-[#303030] text-2xl font-semibold">
              Most loved Products
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
                    <div className="flex justify-between pt-2">
                      <p className="text-sm font-medium text-[#2E2E2E] flex items-center gap-x-1">
                        BDT - 19200{" "}
                        <span className="line-through text-[#545454] text-[10px]">
                          19200
                        </span>
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

export default LoveMoreProducts;
