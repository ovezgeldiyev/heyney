/* eslint-disable @next/next/no-img-element */
import FadeTop from "@/components/common/FadeTop";
import React from "react";

const settings = [
  {
    icon: "/images/Group.svg",
    title: "Community",
  },
  {
    icon: "/images/Layer 2.svg",
    title: "Organized",
  },
  {
    icon: "/images/Vector.svg",
    title: "Secure",
  },
];

function Mission() {
  return (
    <section
      id="mission"
      className="relative z-0 before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[50px] before:bg-[#DEEAFF] md:mb-[65px] mb-[58px] xl:mb-[136px] 2xl:mb-[180px] "
    >
      <div className="bg-missionMob md:bg-missionBG bg-cover bg-center 2xl:rounded-[24px] md:rounded-[24px] rounded-[10px] bg-no-repeat  pt-12 md:pt-[46px] lg:pt-[106px] 2xl:pt-[150px] pb-5 md:pb-[50px] lg:pb-[66px] 2xl:pb-[50px]  relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:bg-black/30  overflow-hidden">
        <div className="relative z-10 px-4">
          <div className="max-w-[274px] md:max-w-[590px] mx-auto mb-6 xl:mb-[76px] 2xl:mb-[160px]">
            <FadeTop
              delay={0.1}
              className="2xl:text-[100px] xl:text-[70px] md:text-[40px] text-[30px] leading-[1] mb-8 font-medium md:drop-shadow-sm drop-shadow-md md:mb-8 xl:mb-4 2xl:mb-8 text-white text-center"
            >
              Our Mission
            </FadeTop>
            <FadeTop delay={0.2} className="">
              <p className="2xl:text-[18px] xl:text-[16px] md:text-[14px] text-[12px] leading-[150%] md:drop-shadow-sm drop-shadow-md text-white max-w-[589px] md:max-w-[unset] m-auto text-center md:mb-[60px] mb-8 ">
                To provide a secure, easy-to-use platform that helps HOAs
                improve communication, streamline administrative tasks, and
                increase community engagement and safety.
              </p>
            </FadeTop>
          </div>

          <FadeTop
            delay={0.3}
            className="flex lg:gap-64 md:gap-40 gap-16 justify-center items-center"
          >
            {settings.map(({ title, icon }, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-6 h-6 mx-auto mb-2 md:w-[38px] md:h-[38px] md:mb-1 xl:w-[48px] xl:h-[48px] ">
                  <img
                    className="w-[100%] h-[100%] object-contain "
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="xl:text-[18px] xl:leading-[150%] md:text-[14px] text-[9px] leading-[150%] font-medium md:drop-shadow-sm drop-shadow-md text-white">
                  {title}
                </div>
              </div>
            ))}
          </FadeTop>
        </div>
      </div>
    </section>
  );
}

export default Mission;
