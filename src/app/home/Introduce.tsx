/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/common/FadeIn";
import FadeTop from "@/components/common/FadeTop";
import React from "react";

function Introduce() {
  return (
    <section
      id="introduce"
      className="bg-sky-300 md:rounded-t-[64px] md:before:hidden rounded-t-2xl relative z-0 pb-[50px] md:pb-[126px] xl:pb-[186px] 2xl:pb-[140px] pt-[30px] md:pt-[77px] xl:pt-[90px] 2xl:pt-[140px] overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#DEEAFF] before:h-[30%] before:w-[100%] before:z-[-1]  "
    >
      <div className="absolute top-[60%] translate-y-[-50%] translate-x-[-50%] left-[50%] z-[-1] flex items-center justify-center w-[104%] min-w-[486px] md:min-w-[unset] md:translate-y-[unset] md:top-[unset] md:bottom-[-15%] lg:bottom-[-25%] xl:bottom-[-35%]">
        <img className="w-full" src="/images/city.svg" alt="" />
      </div>
      <div className="px-8 md:px-0 mx-auto mb-[80px] md:mb-[46px] xl:mb-[70px] 2xl:mb-[84px] max-w-[693px] md:max-w-[580px] xl:max-w-[700px] 2xl:max-w-[1090px] ">
        <FadeTop
          delay={0.1}
          className="flex justify-center md:mb-4 mb-2.5 2xl:mb-4 "
        >
          <img
            className="w-8 md:w-[45px] xl:w-[57px] 2xl:w-[74px] "
            src="/images/IntroducingHeynay.png"
            alt=""
          />
        </FadeTop>
        <FadeTop
          delay={0.2}
          className="md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[100px] text-[30px] leading-[1] font-medium text-cyan-950 md:mb-5 lg:mb-6 xl:mb-6  mb-4 text-center"
        >
          Introducing Heynay
        </FadeTop>
        <FadeTop delay={0.3} className="">
          <p className="md:text-[14px] xl:text-[16px] text-[13px] 2xl:text-[18px] leading-[150%]  mx-auto text-center  2xl:max-w-[700px]">
            A platform specifically designed to cater to the unique needs of HOA
            associations, offering a customized solution that addresses their
            communication challenges and provides features essential for
            effective community management.
          </p>
        </FadeTop>
      </div>
      <FadeIn delay={0.4} className="flex justify-center items-center w-[100%] max-w-[500px] md:max-w-[708px] mx-auto xl:max-w-[867px] 2xl:max-w-[1068px]">
        <img src="/images/introduce.png" alt="" className="w-[100%]" />
      </FadeIn>
    </section>
  );
}

export default Introduce;
