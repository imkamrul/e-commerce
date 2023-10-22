"use client";

import CommonInputWithLabel from "@/components/Common/Sections/CustomInputWithLabel";
import CommonSelectWithLabel from "@/components/Common/Sections/CustomSelectWithLabel";
import { isValidImage } from "@/utils/Index";
import { useEffect, useRef, useState } from "react";

const ProfileUpdate = () => {
  const [image, setImage] = useState<any>();

  const [showImageError, setShowImageError] = useState(false);
  const [previewImage, setPreviewImage] = useState<any>("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageError, setImageError] = useState<any>("Image is required");
  const handleImageChange = (e: any) => {
    if (e.target.files) {
      const [isImageValid, imageErrorMsg] = isValidImage(e.target.files[0]);
      if (!isImageValid) {
        setPreviewImage(null);
        setShowImageError(true);
        return setImageError(imageErrorMsg);
      }
      setShowImageError(false);
      setImage(e.target.files[0]);
      setPreviewImage(URL.createObjectURL(e?.target?.files[0]));
      setImageError(null);
    }
    setIsDragOver(false);
  };
  const imageRef = useRef(null);
  useEffect(() => {
    setPreviewImage(null);
    setImage(null);
    // if (imageRef?.current) {
    //   imageRef.current.value = "";
    // }
  }, []);
  return (
    <div className="py-[28px] px-10 rounded bg-white mb-8">
      <div className="w-full mb-[30px]">
        <label
          htmlFor="image"
          className={`border border-dashed  p-10 block relative ${
            isDragOver ? "!border-purple" : "border-gray-300"
          }`}
        >
          <input
            type="file"
            aria-label="image"
            ref={imageRef}
            id="image"
            accept="image/png, image/jpeg, image/jpg"
            onDragEnter={() => {
              setIsDragOver(true);
            }}
            onDragLeave={() => {
              setIsDragOver(false);
            }}
            onChange={(e) => handleImageChange(e)}
            className="absolute  h-[80%] opacity-0 placeholder:text-[#c7c7c7] mt-3 w-full border border-gray-light-f1 rounded-[5px] px-[15px] py-[10px] focus-visible:outline-purple focus-visible:outline-[.5]"
          />
          <div className="flex flex-col items-center gap-y-2">
            {previewImage ? (
              <img
                src={previewImage}
                alt="preview image"
                className="w-[121px] h-[121px] rounded-[50%]"
              />
            ) : (
              <img
                className="h-[24px]"
                src="https://fundednext.fra1.cdn.digitaloceanspaces.com/dashboard/img-preview.svg"
                alt=""
              />
            )}

            <p className="text-sm text-[#595959] font-medium text-center z-20 cursor-pointer">
              {previewImage ? "Change your image " : "Drop your image or "}
              <span className="text-[#665BFF]">Browse</span>
            </p>
            <p className="text-center text-[#AFAFAF] text-xs">PNG,JPG</p>
          </div>
        </label>
        {/*  image error msg */}
        {showImageError && (
          <span className="block text-red text-xs  pt-1">{imageError}</span>
        )}
        {/*image   error msg */}
      </div>
      <div className="flex flex-wrap">
        <div className="w-1/2 flex flex-col gap-y-2 pr-5">
          <CommonInputWithLabel
            type="text"
            name="name"
            id="name"
            required
            placeholder="Input Full Name"
            label="Full Name"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-2 pl-5">
          <CommonInputWithLabel
            type="text"
            name="name"
            id="name"
            required
            placeholder="Input Full Name"
            label="Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap pt-3">
        <div className="w-1/2 flex flex-col gap-y-2 pr-5">
          <CommonInputWithLabel
            type="text"
            name="name"
            id="name"
            required
            placeholder="Input Full Name"
            label="Mobile"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-2 pl-5">
          <label htmlFor="name" className="text-[#484242] text-sm font-medium">
            Gender
          </label>

          <CommonSelectWithLabel
            //   value={gender}
            options={[
              { value: 1, label: "Male" },
              { value: 2, label: "Female" },
            ]}
            placeholder="Select Gender"
            onChange={(value: any) => {
              // setDisableSubmit(false);
              // setGender(value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap pt-3">
        <div className="w-1/2 flex flex-col gap-y-2 pr-5">
          <CommonInputWithLabel
            type="text"
            name="name"
            id="name"
            required
            placeholder="Input Full Name"
            label="Address"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-2 pl-5">
          <label htmlFor="name" className="text-[#484242] text-sm font-medium">
            Gender
          </label>

          <CommonSelectWithLabel
            //   value={gender}
            options={[
              { value: 1, label: "Male" },
              { value: 2, label: "Female" },
            ]}
            placeholder="Select Gender"
            onChange={(value: any) => {
              // setDisableSubmit(false);
              // setGender(value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-end pt-5">
        <button className="bg-[#ea4c89] text-white text-sm font-medium rounded-[5px] px-[50px] py-[13px]">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileUpdate;
