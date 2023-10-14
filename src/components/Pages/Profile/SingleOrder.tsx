import { MinusIcon, PlusIcon } from "@/components/Common/Icons/Index";

const SingleOrder = () => {
  return (
    <div>
      <div className=" bg-white  rounded py-7 px-10 mb-7 mt-5 text-[#303030] flex items-center justify-between ">
        <div className="">
          <p className="text-xl font-semibold">Order Details</p>
          <p className="text-sm font-semibold pt-3">Order #21342566334</p>
        </div>
        <div className="">
          <p className="text-[13px] font-semibold text-[#858181]">
            10AM -11AM, 24 Nov 2022
          </p>
          <p className="text-lg font- semibold pt-3">Total- 450545</p>
        </div>
      </div>
      <div className=" bg-white  rounded py-7 px-10 mb-7 mt-5 text-[#303030] flex items-center justify-between ">
        <img src="/home/top-bar/top-img (11).png" alt="" className="w-[93px]" />
        <p className="w-5/12 text-sm text-[#494949]">
          Zays Leather Sandal Shoe For Men - Black & Brown - A78 (Bashundhara
          Plaza)
        </p>
        <p className="text-sm text-[#494949] flex items-center gap-x-2">
          Qty
          <span className="cursor-pointer  transform transition-transform hover:scale-105 group">
            <MinusIcon />
          </span>
          <span className="text-[15px] font-bold">1</span>
          <span className="cursor-pointer  transform transition-transform hover:scale-105 group">
            <PlusIcon />
          </span>
        </p>

        {/* order slider  like as daraz pending confirm cancel delivered    */}
        <p className="flex justify-center items-center gap-x-2">
          {" "}
          <span className="w-[10px] h-[10px] rounded-[50%] block bg-[#08C25E]" />
          <span className=" text-sm font-medium ">Delivered</span>
        </p>
        <p>
          <span className="bg-red-700 text-white rounded-[30px] text-sm font-medium py-[8px] px-[18px]">
            Cancel
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleOrder;
