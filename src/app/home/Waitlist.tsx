/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/common/FadeIn";
import FadeTop from "@/components/common/FadeTop";
import EmailFieldWait from "@/components/globals/EmailFieldWait";
import React from "react";

function Waitlist() {
  return (
    <section
      id="Waitlist"
      className="pt-[66px] pb-[47px] md:pt-[80px] md:pb-[70px] xl:pt-[158px] 2xl:pt-[186px] xl:pb-[91px]"
    >
      <div className="container px-[18px]">
        <FadeTop
          delay={0.1}
          className="flex justify-center items-center w-[28px] md:w-[45px] xl:w-[57px] 2xl:w-[74px] h-[28px] md:h-[45px] xl:h-[57px] 2xl:h-[74px] mb-[12px] md:mb-[29px] xl:mb-[12px] 2xl:mb-[31px] mx-auto"
        >
          <img
            className="w-[100%] h-[100%]"
            src="/images/icons/waitlistIcon.png"
            alt=""
          />
        </FadeTop>
        <FadeTop
          delay={0.2}
          className="text-[25px] md:text-[30px] xl:text-[50px] 2xl:text-[70px] leading-[30px] md:leading-[35px] xl:leading-[55px] 2xl:leading-[75px] text-cyan-950 font-medium text-center mb-[15px] md:mb-[16px] xl:mb-[43px] 2xl:mb-[53px]"
        >
          Ready to Heynay your HOA?
        </FadeTop>
        <FadeTop
          delay={0.3}
          className="text-[16px] md:text-[20px] xl:text-[25px] 2xl:text-[40px] leading-[34px] font-medium text-cyan-950 text-center mb-[35px] md:mb-[70px] xl:mb-[100px]"
        >
          Join the waitlist!
        </FadeTop>
        <FadeIn delay={0.4} className="">
          <EmailFieldWait theme="dark" />
        </FadeIn>
      </div>
    </section>
  );
}

export default Waitlist;
