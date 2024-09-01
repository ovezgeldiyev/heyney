"use client";
import FadeTop from "@/components/common/FadeTop";
import WaitlistPopup from "@/components/globals/navbar/WaitlistPopup";
import React from "react";
function Intro() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="pt-[51px] md:pt-0 mb-[40px] md:mb-[70px] xl:mb-[120px] 2xl:mb-[216px]">
        <div className="bg-headerBGMob sm:bg-headerBG bg-no-repeat bg-cover bg-top rounded-[10px] sm:rounded-[24px] rounded-t-[0px] sm:rounded-t-[0px] min-h-[617px] md:min-h-[unset]  pt-[140px] pb-[210px] md:pt-[160px] md:pb-[220px] xl:pt-[210px] xl:pb-[290px] 2xl:pt-[280px] 2xl:pb-[400px]">
          <FadeTop delay={0.2} className="px-4">
            <h1 className=" text-[50px] md:text-[60px] leading-[1] [text-shadow:_1px_1px_20px_rgb(0_0_0_/_36%)] mb-9 md:mb-6 xl:mb-10 text-white text-center xl:text-[100px] 2xl:text-[130px] ">
              HOAs Made Simple
            </h1>
            <div className="flex justify-center">
              <button
                type="button"
                className="py-[13px] px-[35px] bg-sky-500 rounded-[50px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] xl:py-[18px] xl:px-[47px] 2xl:text-[26px] 2xl:py-4 leading-[1] font-medium text-black hover:bg-[#5DC4FF]"
                onClick={() => setOpen(true)}
              >
                Join Waitlist
              </button>
            </div>
          </FadeTop>
        </div>
      </section>
      <WaitlistPopup
        setOpen={setOpen}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Intro;
