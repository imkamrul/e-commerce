import Link from "next/link";
import { Location, Message, Phone } from "../Icons/Index";

const Footer = () => {
  const paymentList = [
    "sp-1.png",
    "sp-2.png",
    "sp-3.png",
    "sp-4.png",
    "sp-5.png",
    "sp-6.png",
  ];
  const footerLinks = [
    {
      title: "Links",
      links: ["Home", "About Us", "Courses", "Contact Us", "Blog", "FAQs"],
    },
    {
      title: "Others",
      links: [
        "Privacy Policy",
        "Terms & Conditions",
        "Cookie Policy",
        "Sitemap",
        "Accessibility",
      ],
    },
  ];
  return (
    <>
      <footer>
        <div className="shadow-lg bg-[#142848] text-white py-[80px]">
          <div className="container flex flex-wrap">
            <div className="w-4/12 pr-4">
              <p className=" text-[22px] font-semibold pb-3">About Us</p>
              <p className=" text-sm pb-3">
                Training centre. Ltd. Company Number 10647280, England and
                Wales, VAT No. GB-267018794
              </p>
              <p className="text-sm pb-3 flex items-center gap-x-2">
                <Phone />
                <span>020 3900 4072</span>
              </p>
              <p className="text-sm pb-3 flex items-center gap-x-2">
                <Message /> <span> trainingcentre.org</span>
              </p>
              <p className="text-sm  flex items-center gap-x-2">
                <Location />{" "}
                <span>
                  11 Floor, 15 St Botolph Street, <br /> London EC3A 7BB
                </span>
              </p>
            </div>
            <div className="w-4/12 flex flex-wrap">
              {footerLinks.map((item, index) => {
                return (
                  <div className="w-1/2" key={index}>
                    <p className=" text-[22px] font-semibold pb-3">
                      {item?.title}
                    </p>
                    <ul>
                      {item?.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href="/" className="text-sm pb-3">
                              {link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="w-4/12">
              <p className=" text-[22px] font-semibold pb-3">Secure payment</p>

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
              <p className="text-xl font-semibold  pt-[55px] pb-[20px]">
                Certificate Validation
              </p>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-white w-8/12 border-[1px] border-[#00000012] rounded-l-[8px] py-[14px] pl-3 focus:outline-[1px] focus:outline-[#00000012]  "
                />
                <button className="bg-[#F5AA40] rounded-r-[8px] w-4/12 text-white text-xs">
                  Validate
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-center bg-[#142848] border-t-[1px] py-[27px] text-base font-medium">
          Copyright © 2021 Training Centre. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
