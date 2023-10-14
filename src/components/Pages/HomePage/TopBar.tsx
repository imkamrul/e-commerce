const TopBar = () => {
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
    {
      name: "Cell Phone",
      imgName: "top-img (7).png",
    },
    {
      name: "Cell Phone",
      imgName: "top-img (8).png",
    },
  ];
  return (
    <>
      <section className="container flex items-center justify-center gap-x-[46px] py-5">
        {data.map((item, index) => {
          return (
            <div className="" key={index}>
              <img
                src={`/home/top-bar/${item.imgName}`}
                alt=""
                className="bg-[#ebe9e9b5] h-[97px] w-[97px] rounded-[50%] p-3"
              />
              <h3 className="text-[#303030] text-sm text-center pt-2">
                {item.name}
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TopBar;
