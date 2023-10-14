import AllProductTopBar from "@/components/Pages/AllProductsPage/AllProductTopBar";
import FilterWrapper from "@/components/Pages/AllProductsPage/FilterWrapper";
import Products from "@/components/Pages/AllProductsPage/Products";

const Page = () => {
  return (
    <>
      <AllProductTopBar />
      <section className="container flex flex-wrap">
        <div className="w-3/12 pr-10">
          <FilterWrapper />
        </div>
        <div className="w-9/12">
          <Products />
        </div>
      </section>
    </>
  );
};

export default Page;
