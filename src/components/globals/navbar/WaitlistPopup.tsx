/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import EmailField from "../EmailField";
import EmailFieldWait from "../EmailFieldWait";
import { motion } from "framer-motion";

interface WaitlistPopupProps {
  onClose: () => void;
  open: boolean;
  setOpen: any;
}

function WaitlistPopup(props: WaitlistPopupProps) {
  const { onClose, open, setOpen } = props;
  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className="z-[1048] fixed top-0 left-0 w-[100%] h-[100%]  md:flex md:items-center bg-[#EBF2FE] md:bg-[#D9D9D9]/80 overflow-auto md:p-10 xl:p-14"
    >
      {/* <img
        className="md:hidden rounded-b-3xl absolute lright-0 bottom-0 -z-10 min-w-[590px] w-[100%]"
        src="/images/city.svg"
        alt=""
      /> */}
      <div
        role="presentation"
        className=" w-[100%] overflow-hidden xl:max-w-[1300px] md:max-w-[963px] md:mx-auto md:rounded-3xl  xl:pt-[90px] md:pt-[66px] pt-[100px] md:pb-[124px]  xl:pb-[180px] pb-[100px] relative z-0 md:shadow-lg px-3 md:bg-[#EBF2FE] md:m-auto "
      >
        {/* <img
          className="hidden md:flex w-full  absolute right-0 bottom-[-40%] -z-10 "
          src="/images/city.svg"
          alt=""
        /> */}
        <button
          onClick={onClose}
          className="absolute right-8 md:right-5 top-8 md:top-4 flex items-center justify-center w-8 h-8 md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]"
        >
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/icon _close outline_ (1).svg"
            alt=""
          />
        </button>
        <div className="flex justify-center mb-7">
          <img
            className="w-10 md:w-auto"
            src="/images/Group 1123 (1).svg"
            alt=""
          />
        </div>
        <div className="mb-20">
          <h2 className="md:text-[40px] text-11xl font-medium leading-[142%] text-cyan-950 md:mb-7 mb-9 text-center max-w-[250px] mx-auto md:max-w-[unset]">
            Ready to Heynay your HOA?
          </h2>
          <p className="md:text-[24px] text-[18px] leading-normal font-medium text-cyan-950 max-w-[490px] mx-auto text-center  ">
            Join the waitlist and be the first to know when Heynay launches!
          </p>
        </div>
        <div className="max-w-[640px] mx-auto">
          <EmailFieldWait onClose={onClose} />
        </div>
      </div>
    </motion.div>
  );
}

export default WaitlistPopup;
