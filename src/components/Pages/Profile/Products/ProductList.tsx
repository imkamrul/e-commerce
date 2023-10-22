import AddProduct from "./AddProduct";

const ProductList = () => {
  const data = [
    {
      order_number: "Order Number",
      date: "Date",
      status: "Payment Status",
      payment_status: "Payment Status",
      total: "Price",
      order_status: "Order Status",
      payment_method: "Payment Method",
      action: "Action",
    },
    {
      order_number: "45665",
      date: "12/12/2021",
      status: "Pending",
      payment_status: "Pending",
      total: "$ 100",
      order_status: "Pending",
      payment_method: "Cash on Delivery",
      action: "View",
    },
    {
      order_number: "45665",
      date: "12/12/2021",
      status: "Pending",
      payment_status: "Pending",
      total: "$ 100",
      order_status: "Pending",
      payment_method: "Cash on Delivery",
      action: "View",
    },
    {
      order_number: "45665",
      date: "12/12/2021",
      status: "Pending",
      payment_status: "Pending",
      total: "$ 100",

      payment_method: "Cash on Delivery",
      action: "View",
    },
    {
      order_number: "45665",
      date: "12/12/2021",
      status: "Pending",
      payment_status: "Pending",
      total: "$ 100",

      payment_method: "Cash on Delivery",
      action: "View",
    },
  ];
  const toggleModal = () => {};
  return (
    <div className="bg-white py-[15px] px-10 rounded">
      <AddProduct />

      <div className="overflow-x-auto customScroll pb-5">
        <div className="flex flex-col w-[110%]">
          {data?.map((item, idx) => {
            return (
              <div
                className={`flex items-center text-[#303030] w-full py-4 ${
                  idx == 0 ? "text-base font-medium" : "text-sm font-medium"
                }`}
                key={item?.order_number + 1}
              >
                <p className=" text-center w-[14%]">{item?.order_number}</p>
                <p className=" text-center w-[12%]">{item?.date}</p>
                <p className=" text-center w-[16%]">{item?.total}</p>
                <p className=" text-center w-[18%] flex items-center justify-center gap-x-2">
                  {" "}
                  {idx !== 0 ? (
                    <span className="w-[10px] h-[10px] rounded-[50%]  bg-green-500" />
                  ) : (
                    ""
                  )}
                  <span> {item?.payment_status}</span>
                </p>
                <p className=" text-center w-[23%]">{item?.payment_method}</p>
                <p className=" text-center w-[15%] flex items-center justify-center">
                  <span
                    className={` ${
                      idx !== 0
                        ? "bg-[#CADAFF] rounded-[19px] font-medium text-[#2052C8] text-xs  py-[7px] px-[22px] cursor-pointer "
                        : ""
                    }`}
                  >
                    {item?.action}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
