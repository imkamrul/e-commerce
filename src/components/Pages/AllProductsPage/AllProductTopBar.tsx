const AllProductTopBar = () => {
  return (
    <>
      <section className="container flex justify-end bg-[#FFF] rounded my-[35px] py-5 pr-5">
        <div className="text-[#303030] text-base font-medium flex gap-x-9">
          <div>
            <label id="show">Show:</label>

            <select
              name="show"
              id="show"
              className="bg-[#F5F5F5] shadow-[0px_2.25px_59.625px_0px_rgba(0,0,0,0.03)] rounded p-2 ml-2"
            >
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="">
            <label id="short">Sort By:</label>

            <select
              name="short"
              id="short"
              className="bg-[#F5F5F5] shadow-[0px_2.25px_59.625px_0px_rgba(0,0,0,0.03)] rounded p-2 ml-2"
            >
              <option value="50">Price</option>
              <option value="100">Rating</option>
              <option value="100">Best Sell</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProductTopBar;
