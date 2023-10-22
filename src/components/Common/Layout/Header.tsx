import Link from "next/link";
import {
  DownArrow,
  HeartIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../Icons/Index";

const Header = () => {
  const upperNavList = [
    { name: "My Account", link: "/profile" },
    { name: "login", link: "/user/log-in/" },
    { name: "Featured Products", link: "/all-products" },
    { name: "Contact", link: "/" },
    { name: "Order Tracking", link: "/" },
    { name: "English", link: "/" },
    { name: "USD", link: "/" },
  ];
  return (
    <>
      <header className="bg-[#142848] text-[#FFFFFF] ">
        <div className="flex justify-end py-1 container">
          <ul className="flex gap-x-[40px]">
            {upperNavList.map((item, index) => (
              <li
                key={index}
                className={`text-xs font-medium ${
                  index === 0 || index === 1
                    ? "relative before:absolute before:top-[2px] before:right-[-20px] before:w-[1px] before:h-[13px] before:bg-[#BBBBBB] "
                    : ""
                } ${index >= 4 ? "flex items-center gap-x-[5px]" : ""} `}
              >
                {index === 4 && (
                  <img
                    src="./HeaderFooter/image 162.png"
                    alt=""
                    className="mr-[5px] w-[15px] h-[10px]"
                  />
                )}
                <Link href={item.link}>{item.name}</Link>
                {index >= 4 ? <DownArrow /> : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="container flex items-center  py-[17px]">
          <div className="w-3/12">
            <img
              src="/HeaderFooter/logo.png"
              alt=""
              className="w-[135px] h-[46px]"
            />
          </div>

          <div className="flex w-1/2">
            <div className="relative">
              <span className="absolute top-[35%] left-[30px]">
                {" "}
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="What do you want to order? "
                className="py-[18px] px-[65px]  border-0 focus:ring-0 focus:outline-none bg-[#ffffff] text-[#6A6A6A] rounded-l-[6px]"
              />{" "}
            </div>
            <button className="text-[#FFFFFF] bg-[red] py-[18px] px-[22px] rounded-r-[6px]">
              Search
            </button>
          </div>
          <div className="w-3/12 flex items-center justify-between">
            <div className="flex items-center gap-x-[18px]">
              <UserIcon />{" "}
              <p className="text-[#FFFFFF] text-base leading-0 flex flex-col">
                <span className="leading-0 text-[15px] text-[#dfdfdf]">
                  Sign In
                </span>
                <span className="font-medium leading-0">Account</span>
              </p>
            </div>
            <div className="">
              <HeartIcon />
            </div>

            <div className="">
              <ShoppingIcon />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
