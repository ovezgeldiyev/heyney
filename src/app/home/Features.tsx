/* eslint-disable @next/next/no-img-element */
import FadeIn from "@/components/common/FadeIn";
import FadeTop from "@/components/common/FadeTop";
import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="mb-[69px] md:mb-[105px] xl:mb-[141px] 2xl:mb-[200px]"
    >
      <FadeTop
        delay={0.1}
        className="flex justify-center items-center w-[28px] h-[28px] md:w-[45px] xl:w-[57px] 2xl:w-[74px] md:h-[45px] xl:h-[57px] 2xl:h-[74px] mb-[15px] md:mb-[17px] xl:mb-[29px] 2xl:mb-[17px] mx-auto"
      >
        <img
          className="w-[100%] h-[100%]"
          src="/images/icons/features.png"
          alt=""
        />
      </FadeTop>
      <FadeTop
        delay={0.2}
        className="text-[30px] md:text-[40px] xl:text-[70px] 2xl:text-[100px]  leading-[40px] md:leading-[45px] xl:leading-[75px] 2xl:leading-[100px] font-medium text-cyan-950 mb-[58px] md:mb-[94px] xl:mb-[125px] text-center"
      >
        Features
      </FadeTop>
      <div className="flex flex-col mx-auto mb-[54px] items-center px-[18px] md:flex-row md:justify-between md:pl-[8px] md:pr-[41px] xl:pl-[27px] xl:pr-[67px] xl:mb-[123px] 2xl:pl-[64px] 2xl:pr-[100px]">
        <FadeIn
          delay={0.3}
          className="flex items-center justify-center order-[-1] mb-[23px] md:mb-0 w-[calc(100%+12px)] ml-[-6px] mr-[-6px]  sm:max-w-[446px] md:order-0 md:max-w-[unset] md:w-[calc(58%-10px)] xl:w-[calc(61%-12px)] 2xl:w-[calc(61%-30px)]"
        >
          <img className="w-full" src="/images/Group 1123 (1).png" alt="" />
        </FadeIn>
        <FadeIn
          delay={0.4}
          className="text-center order-0 px-[3px] mb-0 md:order-1 md:w-[calc(42%-10px)] md:text-left md:px-[0] md:mb-[0] xl:w-[calc(39%-12px)] 2xl:w-[calc(39%-12px)]"
        >
          <h2 className="text-[26px] md:text-[30px] leading-[34px] md:leading-[35px] font-medium text-cyan-950 mb-[15px] md:mb-[8px] xl:text-[46px] xl:leading-[110%] xl:mb-[15px] 2xl:text-[60px] 2xl:mb-[21px]">
            Connection Platform
          </h2>
          <p className="text-[13px] md:text-[14px] leading-[150%] text-cyan-950 font-normal xl:text-[16px] 2xl:text-[18px] 2xl:max-w-[555px]">
            Heynay allows residents and HOA board members to communicate
            effectively through localized discussions, important announcements
            and updates, and group messages within the community.
          </p>
        </FadeIn>
      </div>
      <div className="flex flex-col mx-auto mb-[54px] items-center px-[18px] md:flex-row md:justify-between md:pl-[77px] md:pr-[27px] xl:pl-[119px] xl:pr-[47px] xl:mb-[123px] 2xl:pl-[243px] 2xl:pr-[138px]">
        <FadeIn
          delay={0.4}
          className="flex items-center justify-center order-[-1] md:order-[1] mb-[23px] md:mb-0 sm:max-w-[347px] md:max-w-[unset] md:w-[calc(53%-28px)] 2xl:w-[calc(54%-57px)]"
        >
          <img className="w-full" src="/images/Group 1123 (2).png" alt="" />
        </FadeIn>
        <FadeIn
          delay={0.3}
          className=" text-center order-0 pl-[10px] pr-[7px] mb-0 md:text-left md:px-[0] md:mb-[0] md:w-[calc(47%-28px)]  2xl:w-[calc(46%-57px)]"
        >
          <h2 className="text-[26px] md:text-[30px] leading-[34px] md:leading-[35px] font-medium text-cyan-950 mb-[15px] md:mb-[8px] xl:text-[46px] xl:leading-[110%] xl:mb-[15px] 2xl:text-[60px] 2xl:mb-[21px]">
            Event Management
          </h2>
          <p className="text-[13px] md:text-[14px] leading-[150%] text-cyan-950 font-normal xl:text-[16px] 2xl:text-[18px] 2xl:max-w-[630px]">
            Schedule and manage community events, such as neighborhood
            gatherings, social activities, board meetings, and maintenance work,
            ensuring everyone stays informed and engaged.
          </p>
        </FadeIn>
      </div>
      <div className="flex flex-col mx-auto items-center px-[18px] md:flex-row md:justify-between md:pl-[57px] md:pr-[43px] xl:pl-[96px] xl:pr-[103px] 2xl:pl-[174px] 2xl:pr-[187px]">
        <FadeIn
          delay={0.4}
          className="flex items-center justify-center order-[-1] mb-[23px] md:mb-0 sm:max-w-[360px] md:order-0 md:max-w-[unset] md:w-[calc(51%-16px)] xl:w-[calc(58%-47px)] 2xl:w-[calc(59%-55px)]"
        >
          <img className="w-full" src="/images/Group 1124.png" alt="" />
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="md:text-left text-center order-0 mb-[0] pl-[15px] pr-[15px] md:order-1 md:px-[0] md:mb-[0]  md:w-[calc(49%-16px)] xl:w-[calc(42%-47px)] 2xl:w-[calc(41%-55px)]"
        >
          <h2 className="text-[26px] md:text-[30px] leading-[34px] md:leading-[35px] font-medium text-cyan-950 mb-[15px] md:mb-[8px] xl:text-[46px] xl:leading-[110%] xl:mb-[15px] 2xl:text-[60px] 2xl:mb-[21px]">
            Community Polls <br /> and Surveys
          </h2>
          <p className="text-[13px] md:text-[14px] leading-[150%] text-cyan-950 font-normal xl:text-[16px] 2xl:text-[18px]">
            Create and distribute polls and surveys to empower residents to
            voice their opinions, provide feedback, and participate in community
            decision-making processes.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default Features;
