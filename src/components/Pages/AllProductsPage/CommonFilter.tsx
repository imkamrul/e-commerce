import { CommonFilterProps } from "@/components/Common/interface-types/Index";

const CommonFilter: React.FC<CommonFilterProps> = ({ content }) => {
  const { title, options } = content;
  return (
    <div className="bg-white mt-5">
      <p className="text-lg font-semibold border-b-[1px] border-[#F4F4F4] py-5 pl-5 mb-1">
        {title}
      </p>

      <div className="flex py-4 px-5 justify-between gap-y-5 flex-col">
        {options.map((option: any) => {
          return (
            <div className="flex items-center gap-x-5" key={option?.id}>
              <input
                type="checkbox"
                id={option?.id}
                name={option?.id}
                value="Bike"
                className="h-6 w-6 accent-[#DD1D25]"
              />
              <label id={option?.id} className="text-base text-[#2E2E2E]">
                {" "}
                {option?.text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonFilter;
