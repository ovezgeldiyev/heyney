import FadeIn from "@/components/common/FadeIn";
import FadeTop from "@/components/common/FadeTop";
import { checkMarkIcon } from "@/components/globals/SVG";
import React from "react";
const comparisonList = [
  {
    id: "1",
    title: "Direct Messaging",
    heyney: true,
    sMedia: true,
    cApps: true,
    email: false,
  },
  {
    id: "2",
    title: "Event Scheduling",
    heyney: true,
    sMedia: true,
    cApps: false,
    email: true,
  },
  {
    id: "3",
    title: "Polls & Surveys",
    heyney: true,
    sMedia: true,
    cApps: false,
    email: false,
  },
  {
    id: "4",
    title: "Organized Message Board/Feed",
    heyney: true,
    sMedia: true,
    cApps: false,
    email: false,
  },
  {
    id: "5",
    title: "Customization and Branding",
    heyney: true,
    sMedia: false,
    cApps: false,
    email: false,
  },
  {
    id: "6",
    title: "Privacy & Security",
    heyney: true,
    sMedia: false,
    cApps: false,
    email: false,
  },
  {
    id: "7",
    title: "Dedicated HOA Support",
    heyney: true,
    sMedia: false,
    cApps: false,
    email: false,
  },
];
{
  /* <img src="/images/heynalogo.svg" alt="icon" /> */
}

export default function Comparisons() {
  return (
    <div className="" id="comparisons">
      <div className="mb-[35px] text-center px-4 md:mb-[70px] xl:mb-[110px] 2xl:mb-[140px]">
        <FadeTop
          delay={0.1}
          className="flex items-center justify-center mx-auto w-[28px] mb-[10px] md:w-[45px] xl:w-[57px] 2xl:w-[74px]  "
        >
          <img src="/images/parison.png" alt="icon" />
        </FadeTop>
        <FadeTop
          delay={0.2}
          className="text-[30px] leading-[1] md:text-[40px] xl:text-[70px] 2xl:text-[100px]"
        >
          Comparisons
        </FadeTop>
      </div>
      <FadeIn delay={0.3} className="lg:px-6 xl:px-[70px]">
        <div className=" rounded-[20px] xl:rounded-[32px] bg-[#EBF2FE] py-2 px-4 max-w-[1140px] 2xl:max-w-[1592px] mx-auto md:py-3 md:px-10 xl:px-[44px] xl:py-4 2xl:px-[78px] xl:pr-24 ">
          <div className="relative z-10 before:absolute before:top-0 before:left-[120px] md:before:left-[300px] xl:before:left-[350px] 2xl:before:left-[500px]  before:rounded-[8px] before:shadow-sm before:w-[calc(25%-30px)] before:md:w-[calc(25%-75px)] before:xl:w-[calc(25%-87.5px)] before:2xl:w-[calc(25%-125px)] before:bg-white before:h-[100%] before:z-[-1] max-w-[440px] md:max-w-[760px] lg:max-w-[1040px] 2xl:max-w-[1400px] mx-auto before:2xl:rounded-[20px] before:max-w-[60px] before:md:max-w-[110px]  before:xl:max-w-[140px] before:2xl:max-w-[200px]">
            <div className="flex  border-solid border-[1px] border-white border-l-[0px] border-r-[0px] border-t-[0px] border-b-[0px]">
              <div className="w-[120px] md:w-[300px] xl:w-[350px] 2xl:w-[500px] py-[10px]"></div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[4px] flex items-center justify-end flex-col max-w-[60px] md:max-w-[110px] xl:max-w-[140px] 2xl:max-w-[200px]">
                <div className="flex items-center justify-center w-[16px] my-[7px] md:w-[35px] md:my-[22px] xl:w-[38px] xl:my-[30px] 2xl:w-[50px] 2xl:my-[22px]">
                  <img
                    src="/images/homeicon.png"
                    className="w-[100%] object-contain"
                    alt="icon"
                  />
                </div>
                <div className="text-center text-[9px] md:text-[16px] xl:text-[20px] md:leading-[1.2] 2xl:text-[24px] leading-[1] text-[#072A49] font-semibold ">
                  Heynay
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[4px] flex items-center justify-end flex-col">
                <div className="text-center text-[9px] md:text-[16px] xl:text-[20px] md:leading-[1.2] 2xl:text-[24px] leading-[1] text-[#072A49] font-semibold px-0.5 ">
                  Social Media
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[4px] flex items-center justify-end flex-col">
                <div className="text-center text-[9px] md:text-[16px] xl:text-[20px] md:leading-[1.2] 2xl:text-[24px] leading-[1] text-[#072A49] font-semibold ">
                  Chat/Email
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[4px] flex items-center justify-end flex-col">
                <div className="text-center text-[9px] md:text-[16px] xl:text-[20px] md:leading-[1.2] 2xl:text-[24px] leading-[1] text-[#072A49] font-semibold ">
                  HOA Website
                </div>
              </div>
            </div>
            <div className="flex  border-solid border-[1px] border-white border-l-[0px] border-r-[0px] border-t-[0px]">
              <div className="w-[120px] md:w-[300px] xl:w-[350px]  2xl:w-[500px] py-[10px] md:py-[18px] 2xl:py-[23px] ">
                <div className="text-[11px] md:text-[18px] xl:text-[20px] md:leading-[1.2] leading-[14px] max-h-[28px] overflow-hidden  text-[#072A49] font-semibold text-ellipsis pr-[8px]">
                  Cost
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px] md:py-[18px] 2xl:py-[23px] max-w-[60px] md:max-w-[110px] xl:max-w-[140px] 2xl:max-w-[200px]">
                <div className="text-center m-auto text-[9px] md:text-[18px] md:leading-[1.2] leading-[1] text-[#072A49] font-medium  ">
                  Free
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px] md:py-[18px] 2xl:py-[23px]">
                <div className="text-center m-auto text-[9px] md:text-[18px] md:leading-[1.2] leading-[1] text-[#072A49] font-medium  opacity-70 ">
                  Free
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px] md:py-[18px] 2xl:py-[23px]">
                <div className="text-center m-auto text-[9px] md:text-[18px] md:leading-[1.2] leading-[1] text-[#072A49] font-medium  opacity-70 ">
                  Free
                </div>
              </div>
              <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px] md:py-[18px] 2xl:py-[23px]">
                <div className="text-center m-auto text-[9px] md:text-[18px] md:leading-[1] leading-[1] text-[#072A49] font-medium  opacity-70 ">
                  $$$
                </div>
              </div>
            </div>
            {comparisonList.map((item, index) => {
              return <TableRow {...item} key={index} />;
            })}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
const TableRow = ({
  title,
  heyney,
  sMedia,
  cApps,
  email,
}: {
  title: string;
  heyney: boolean;
  sMedia: boolean;
  cApps: boolean;
  email: boolean;
}) => {
  return (
    <div className="flex  border-solid border-[1px] border-white border-l-0 border-r-0 border-t-0  last:border-0  ">
      <div className="w-[120px] md:w-[300px] xl:w-[350px]  2xl:w-[500px] py-[10px]  md:py-[18px] 2xl:py-[23px]">
        <div className="text-[11px] md:text-[18px] xl:text-[20px] leading-[14px] md:leading-[1.2] max-h-[28px] md:max-h-[unset] overflow-hidden  text-[#072A49] font-semibold text-ellipsis pr-[8px] border-b-0">
          {title}
        </div>
      </div>
      <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px]  md:py-[18px] 2xl:py-[23px] flex max-w-[60px] md:max-w-[110px] xl:max-w-[140px] 2xl:max-w-[200px] ">
        {heyney && (
          <div className="flex items-center justify-center w-[11px] h-[11px] md:w-[25px] md:h-[25px] 2xl:w-[32px] 2xl:h-[32px] m-auto [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[1] ">
            {checkMarkIcon}
          </div>
        )}
      </div>
      <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px]  md:py-[18px] 2xl:py-[23px] flex">
        {sMedia && (
          <div className="flex items-center justify-center w-[11px] h-[11px] md:w-[25px] md:h-[25px] 2xl:w-[32px] 2xl:h-[32px] m-auto [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[0.7]">
            {checkMarkIcon}
          </div>
        )}
      </div>
      <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px]  md:py-[18px] 2xl:py-[23px] flex">
        {cApps && (
          <div className="flex items-center justify-center w-[11px] h-[11px] md:w-[25px] md:h-[25px] 2xl:w-[32px] 2xl:h-[32px] m-auto [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[0.7]">
            {checkMarkIcon}
          </div>
        )}
      </div>
      <div className="w-[calc(25%-30px)] md:w-[calc(25%-75px)] xl:w-[calc(25%-87.5px)] 2xl:w-[calc(25%-125px)] py-[10px]  md:py-[18px] 2xl:py-[23px] flex ">
        {email && (
          <div className="flex items-center justify-center w-[11px] h-[11px] md:w-[25px] md:h-[25px] 2xl:w-[32px] 2xl:h-[32px] m-auto [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[0.7]">
            {checkMarkIcon}
          </div>
        )}
      </div>
    </div>
  );
};
