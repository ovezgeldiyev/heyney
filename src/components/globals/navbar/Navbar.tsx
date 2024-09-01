"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Link from "next/link";
import React, { Fragment } from "react";
import WaitlistPopup from "./WaitlistPopup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import FadeTop from "@/components/common/FadeTop";

const navigates = [
  {
    name: "Introduction",
    url: "#introduce",
  },
  {
    name: "Our Mission",
    url: "#mission",
  },
  {
    name: "Features",
    url: "#features",
  },
  {
    name: "Comparisons",
    url: "#comparisons",
  },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Fragment>
      <nav>
        <div className="container">
          <div className="md:py-2 fixed top-0 left-0 right-0 z-20 md:px-2 ">
            <FadeTop
              delay={0.2}
              className="flex justify-between items-stretch bg-white md:max-w-[660px] lg:max-w-[856px] xl:max-w-[940px] 2xl:max-w-[1032px] mx-auto md:rounded-full px-5 py-2 md:p-[3px] md:pl-6 z-[102] relative  shadow-md"
            >
              <Link href="/" className="flex justify-center items-center">
                <img
                  className="hidden lg:block w-[136px] 2xl:w-[140px]"
                  src="/images/logo.png"
                  alt=""
                />
                <img
                  className="lg:hidden w-[102px]"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
              <div className="hidden md:flex items-center ">
                {navigates.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    className="text-[14px] leading-[1] font-medium text-neutral-800 py-1 px-2 lg:text-[16px] lg:px-4  xl:text-[18px] 2xl:text-[20px] "
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-[50px] text-[14px] leading-1 px-[21px] py-1 bg-sky-500 shadow-sm lg:text-[16px] lg:px-[27px] xl:text-[18px] 2xl:py-2 2xl:text-[20px] hover:bg-[#5DC4FF] hover:opacity-[1] font-medium text-black "
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Join Waitlist
                </button>
                <div
                  onClick={toggleDrawer}
                  className="py-1 pl-4 md:hidden cursor-pointer flex items-center"
                >
                  <img src="/images/Group (1).svg" alt="" />
                </div>
              </div>
            </FadeTop>
            <div className="lg:hidden">
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="top"
                size="unset"
                overlayColor="#00000000"
                className="fixed top-[51px!important] z-[101!important] "
              >
                <div className="p-5 h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        {navigates.map(({ name, url }, index) => (
                          <Link
                            key={index}
                            onClick={() => setIsOpen(!isOpen)}
                            href={url}
                            className="text-4xl text-center font-medium text-neutral-800"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>
      <WaitlistPopup
        setOpen={setOpen}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
}

export default Navbar;
