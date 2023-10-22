import CustomImageFieldWithLabel from "@/components/Common/Sections/CustomImageFieldWithLabel";
import CommonInputWithLabel from "@/components/Common/Sections/CustomInputWithLabel";
import Modal from "@/components/Common/Sections/Modal";
import { useState } from "react";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end my-5">
        <button
          className="bg-[#ea4c89] text-white text-sm font-medium rounded-[5px] px-[50px] py-[13px]"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          Add a new product
        </button>
        <Modal
          isLoading={true}
          title="Add New Product"
          isOpen={isOpen}
          toggleModal={() => setIsOpen(false)}
        >
          <CommonInputWithLabel
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter Product name"
            label="Product Name"
          />
          <CommonInputWithLabel
            type="number"
            name="price"
            id="name"
            required
            placeholder="Enter Product Price"
            label="Product Price"
          />
          <CustomImageFieldWithLabel
            //   type="text"
            //   name="name"
            //   id="name"
            required
            //   placeholder="Enter Product name"
            label="Product Name"
          />
          <CommonInputWithLabel
            type="number"
            name="price"
            id="name"
            required
            placeholder="Enter Product Price"
            label="Product Quantity"
          />
          <CommonInputWithLabel
            type="number"
            name="price"
            id="name"
            required
            placeholder="Enter Product Price"
            label="Product Discount"
          />
          <div className="mt-5 flex justify-end">
            <button
              className="bg-[#ea4c89] text-white text-sm font-medium rounded-[5px] px-[50px] py-[13px]"
              onClick={() => setIsOpen(true)}
            >
              {" "}
              Add a new product
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AddProduct;
