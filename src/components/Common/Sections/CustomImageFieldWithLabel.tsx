import { isValidImage } from "@/utils/Index";
import React, { useEffect, useRef, useState } from "react";
import { CustomImageFieldWithLabelProps } from "../interface-types/Index";

const CustomImageFieldWithLabel: React.FC<CustomImageFieldWithLabelProps> = ({
  label,
  required,
}) => {
  const [image, setImage] = useState<any>();

  const [showImageError, setShowImageError] = useState(false);
  const [previewImage, setPreviewImage] = useState<any>("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageError, setImageError] = useState<any>("Image is required");
  const imageRef = useRef(null);
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
  useEffect(() => {
    setPreviewImage(null);
    setImage(null);
    // if (imageRef?.current) {
    //   imageRef.current.value = "";
    // }
  }, []);
  return (
    <>
      <p className="text-[#484242] text-sm font-medium">
        {label} {required ? <span className="text-[red]">*</span> : ""}
      </p>

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
    </>
  );
};

export default CustomImageFieldWithLabel;
