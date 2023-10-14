import CommonFilter from "./CommonFilter";
import PriceFilter from "./PriceFilter";

const FilterWrapper = () => {
  return (
    <>
      <PriceFilter />
      <CommonFilter
        content={{
          title: "Warranty",
          options: [
            { id: "Warranty", text: "1 Year Warranty" },
            { id: "NoWarranty", text: "No Warranty" },
          ],
        }}
      />
      <CommonFilter
        content={{
          title: "Availability",
          options: [
            { id: "InStock", text: "In Stock" },
            { id: "order", text: "Pre Order" },
            { id: "coming", text: "Up Coming" },
          ],
        }}
      />
    </>
  );
};

export default FilterWrapper;
