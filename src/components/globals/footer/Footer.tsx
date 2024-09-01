"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Waitlist from "@/app/home/Waitlist";
import WaitlistPopup from "../navbar/WaitlistPopup";

const footerLinks = [
  {
    name: "Terms",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/",
  },
  {
    name: "Learn More",
    url: "/",
  },
  // {
  //   name: "Join Waitlist",
  //   url: "/",
  // },
];

function Footer() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-[0px] left-[0px] w-[100%] h-[100%] z-[-1] flex justify-center items-center bg-gradBottom "></div>
        <Waitlist />
        <footer className=" ">
          <div className="pt-[6px] md:pt-[20px] xl:pt-[20px] pb-[19px] md:pb-[24px] xl:pb-[58px] 2xl:pb-[79px] px-[18px]  border-t-[0.5px] border-solid border-[#3F3F3F] xl:max-w-[1087px] xl:mx-auto ">
            <div className="flex justify-between items-center max-w-[330px] md:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[670px] mr-auto ml-auto mb-[3px] md:mb-[4px] xl:mb-[14px] relative">
              <div className="flex justify-center items-center">
                <Link
                  href="/"
                  className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] text-cyan-950 leading-[34px] font-semibold mr-[20px] md:mr-[30px] xl:mr-[40px] 2xl:mr-[50px]  last:mr-0"
                >
                  Privacy
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] text-cyan-950 leading-[34px] font-semibold mr-[25px] md:mr-[70px] xl:mr-[78px] 2xl:mr-[70px] last:mr-0 "
                >
                  Join Waitlist
                </button>
              </div>
              <div className="flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img
                  className="w-[17px] md:w-[27px] xl:w-[32px] 2xl:w-[41px] "
                  src="/images/homeicon.png"
                  alt=""
                />
              </div>
              <a
                href="#"
                className="flex items-center font-semibold text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px]"
              >
                <img
                  className="w-[10px] md:w-[14px] xl:w-[17px] 2xl:w-[18px] mt-[2px] mr-[2px] md:mr-[4px] xl:mr-[6px]"
                  src="/images/email.svg"
                  alt=""
                />
                contact@heynay.com
              </a>
            </div>
            <div>
              <p className="text-center text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] text-cyan-950 leading-[34px] font-semibold ">
                &copy; {new Date().getFullYear()} Heynay. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
      <WaitlistPopup
        setOpen={setOpen}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Footer;
