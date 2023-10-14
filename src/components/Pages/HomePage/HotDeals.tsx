const HotDeals = () => {
  const data = ["image 164.png", "image 164 (1).png"];
  return (
    <>
      <section className="container flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div className="w-1/2 p-2" key={index}>
              <img
                src={`/home/offer/${item}`}
                alt=""
                className="rounded-[6px]"
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HotDeals;
