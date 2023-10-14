const Footer = () => {
  const paymentList = [
    "sp-1.png",
    "sp-2.png",
    "sp-3.png",
    "sp-4.png",
    "sp-5.png",
    "sp-6.png",
  ];
  return (
    <footer className="bg-[#142848] pt-[40px]">
      <hr className="bg-[#747474]  border-[#747474]" />
      <div className="container text-white flex items-center py-5">
        <div className="w-5/12">
          <p className="text-base font-medium">
            Copyright © 2022 Walcart Limited
          </p>
        </div>
        <div className="w-7/12 flex items-center gap-x-[26px] justify-end">
          <p className="text-base font-medium">
            Copyright © 2022 Walcart Limited
          </p>
          <div className="flex gap-x-2">
            {paymentList.map((item, index) => (
              <img
                src={`/HeaderFooter/${item}`}
                alt=""
                key={index}
                className="w-[64px] h-[39px]"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
