const OfferSectionTwo = () => {
  const data = ["offer (6).png", "offer (7).png", "offer (8).png"];
  return (
    <>
      <section className="container flex flex-wrap pb-10">
        {data.map((img, index) => {
          return (
            <div className="w-4/12 px-2" key={index}>
              <img src={`/home/offer/${img}`} alt="" className="w-full" />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default OfferSectionTwo;
