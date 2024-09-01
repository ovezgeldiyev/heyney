/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/common/FadeIn";
import FadeTop from "@/components/common/FadeTop";
import React from "react";

function Landscape() {
  return (
    <section className="mb-10 md:mb-[70px] lg:mb-[100px] xl:mb-[120px] 2xl:mb-[260px]">
      <div className="px-6 max-w-[780px] lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1260px] mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-8 text-center md:text-left md:w-[calc(50%-20px)] md:max-w-[560px] md:pl-9 ">
            <FadeTop
              delay={0.2}
              className="mb-2 flex justify-center md:justify-start "
            >
              <img
                className="w-8 md:w-[45px] xl:w-[55px]  2xl:w-[74px]"
                src="/images/currentLanscape.png"
                alt=""
              />
            </FadeTop>
            <FadeTop
              delay={0.2}
              className="md:text-[40px] text-[30px] leading-[110%] font-medium   text-cyan-950 mb-4 md:mb-3  xl:text-[70px] xl:mb-4 2xl:text-[100px] 2xl:mb-5 "
            >
              Current Landscape
            </FadeTop>
            <FadeTop delay={0.2} className="">
              <p className=" text-[14px]  leading-[150%] text-neutral-800 xl:text-[16px] 2xl:text-[18px]">
                We noticed that while there are many different social media apps
                out there, there isn&apos;t a dedicated localized platform for HOAs
                to allow their residents to communicate and engage with each
                other in a private and organized manner.
              </p>
            </FadeTop>
          </div>
          <FadeIn delay={0.4} className="flex items-center justify-center w-[calc(100%-36px)] max-w-[370px] mx-auto md:w-[calc(50%-20px)] md:max-w-[560px] md:m-[unset] md:max-w-[unset] ">
            <img src="/images/Rectangle 21.png" alt="" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Landscape;
