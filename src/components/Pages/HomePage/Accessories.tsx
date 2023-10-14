import Link from "next/link";

const Accessories = () => {
  const data = [
    {
      title: "Mobile Accesoseries",
      btnLink: "/",
      product: [
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
      ],
    },
    {
      title: "Mobile Accesoseries",
      btnLink: "/",
      product: [
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
          imgName: "top-img (7).png",
        },
        {
          name: "Cell Phone",
          imgName: "top-img (8).png",
        },
      ],
    },
    {
      title: "Deal o the Day",
      btnLink: "/",
      product: [
        {
          imgName: "top-img (9).png",
        },
      ],
    },
    {
      title: "Mobile Accesoseries",
      btnLink: "/",
      product: [
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
      ],
    },
  ];

  return (
    <>
      <section className="container flex flex-wrap py-4 text-[#3E3E3E]">
        {data.map((item, index) => {
          return (
            <div className="w-3/12 px-2" key={index}>
              <div className="bg-white rounded-[6px] shadow-[0px_2px_46px_0px_rgba(0,0,0,0.05)] p-6">
                <p className=" text-lg font-semibold pb-6">{item.title}</p>
                <div className="flex flex-wrap justify-between gap-y-3">
                  {item.product.map((item: any, idx: number) => {
                    return index === 2 ? (
                      <div className=" flex  flex-col" key={idx}>
                        <img
                          src={`/home/top-bar/${item.imgName}`}
                          alt=""
                          className=" h-[262px] "
                        />
                      </div>
                    ) : (
                      <div className=" flex  flex-col" key={idx}>
                        <img
                          src={`/home/top-bar/${item.imgName}`}
                          alt=""
                          className="bg-[#ebe9e9b5] h-[97px] w-[97px] rounded-[50%] p-3"
                        />
                        <h3 className="font-medium text-sm  pt-2 text-center">
                          {item?.name}
                        </h3>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/"
                  className="text-[#214497] text-lg font-semibold mt-5 block hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Accessories;
