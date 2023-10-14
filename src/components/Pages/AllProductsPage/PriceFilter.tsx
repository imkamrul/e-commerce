"use client";

const PriceFilter = () => {
  return (
    <>
      <div className="bg-white">
        <p className="text-lg font-semibold border-b-[1px] border-[#F4F4F4] py-5 pl-5 mb-1">
          Price Range
        </p>

        <div className="flex py-4 px-5 justify-between">
          <input
            type="number"
            placeholder="Min"
            className="border-[#F4F4F4] border-[1px] focus:outline-0 w-5/12 bg-[#F4F4F4] placeholder:text-base placeholder:font-medium placeholder:pl-1 py-1"
          />
          <input
            type="number"
            placeholder="Max"
            className="border-[#F4F4F4] border-[1px] focus:outline-0 w-5/12 bg-[#F4F4F4] placeholder:text-base placeholder:font-medium placeholder:pl-1 py-1"
          />
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
