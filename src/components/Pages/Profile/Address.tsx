const Address = () => {
  const data = [
    {
      title: "Billing Address",

      phone: "0123456798",
      address:
        "Bashundhara R/A, E block, 18 No Road, House 318, lift- 5, 5ABashundhara R/A, E block, 18 No Road, House 318, lift- 5, 5ADhaka, 1207Bangladesh",
    },
    {
      title: "Shipping Address",

      phone: "0123456798",
      address:
        "Bashundhara R/A, E block, 18 No Road, House 318, lift- 5, 5ABashundhara R/A, E block, 18 No Road, House 318, lift- 5, 5ADhaka, 1207Bangladesh",
    },
  ];
  return (
    <div className="py-[30px] px-10 bg-white rounded  mb-8">
      <div className="flex flex-wrap justify-between">
        {data?.map((item) => {
          return (
            <div className="w-5/12" key={item?.title}>
              <p className="text-[#303030] text-lg font-semibold">
                {item?.title}
              </p>
              <p className="text-[#303030] text-base  pt-8">{item?.phone}</p>
              <p className="text-[#303030] text-base  pt-3">{item?.address}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button className="text-white text-base bg-[#CD2027] py-[10px] px-[22px] rounded-[3px] mt-10 transform transition-transform hover:scale-105 font-medium">
          Manage Address
        </button>
      </div>
    </div>
  );
};

export default Address;
