"use client";

import { CloseIcon } from "../Icons/Index";
import { ModalProps } from "../interface-types/Index";

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  toggleModal,
  isOpen,
  isLoading,
  customStyleClass,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="theme-transition siteOverlay fixed left-0 top-0 w-full h-full bg-[rgba(9,9,9,.79)] z-[999999]"
          onClick={() => !isLoading && toggleModal()}
        ></div>
      )}

      {isOpen && (
        <div
          className={`theme-transition modalWrapper w-[360px] md:w-[450px]  fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[999999] overflow-x-hidden max-h-[calc(100vh-100px)] overflow-y-auto rounded-[5px] scrollbar-gray ${
            customStyleClass ? customStyleClass : "lg:w-[520px] "
          }`}
        >
          <div className="modalHeader flex py-5 xl:py-2 2xl:py-5 px-[30px] bg-gray-blue justify-between border-b border-[#E2E2E2]">
            <h2 className="text-[20px] font-semibold font-rubik">{title}</h2>
            {title !== "Confirm Name" && (
              <button
                className="bg-red inline-block w-7 h-7 text-center py-[0px] rounded-md cursor-pointer disabled:bg-gray-400"
                onClick={toggleModal}
                disabled={isLoading ? isLoading : false}
              >
                <CloseIcon className="!inline-block" />
              </button>
            )}
          </div>

          <div className="modalBody p-[30px] bg-white">{children}</div>
        </div>
      )}
    </>
  );
};
export default Modal;
