const OfferSection = () => {
  const data = [
    ["offer (2).png", "offer (1).png"],
    ["offer (5).png"],
    ["offer (4).png", "offer (3).png"],
  ];
  return (
    <>
      <section className="container flex flex-wrap items-center pb-10">
        {data.map((item, index) => {
          return (
            <div
              className={`${
                index == 1 ? "w-1/2 px-3" : "w-3/12 px-3"
              }  flex flex-col gap-y-[30px]`}
              key={index}
            >
              {item.map((img, index) => {
                return (
                  <img
                    src={`home/offer/${img}`}
                    alt=""
                    key={index}
                    className=""
                  />
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default OfferSection;
