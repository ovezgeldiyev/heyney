import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {"50": "#ffffff", "400": "#9CBACC"},
        neutral: {"800": "#262123"},
        cyan: {"950": "#072A49"},
        sky: {"100":"#DEEAFF00", "300": "#EBF2FE", "400": "#7BBEEB", "500": "#7CCFFF", "600": "#DEEAFF"},
      },
      backgroundImage: {
        'gradBottom': "linear-gradient(180deg, rgba(222, 234, 255, 0) 0%, #DEEAFF 100%)",
      },
      textShadow: {
        'xl': '0 35px 35px rgba(0, 0, 0, 1)',
      }
    },
    fontSize: {
      xs: ["7px", {lineHeight: "1.63em"}],
      sm: ["7px", {lineHeight: "1.27em"}],
      md: ["8px", {lineHeight: "1.19em"}],
      base: ["8px", {lineHeight: "1.06em"}],
      lg: ["9px", {lineHeight: "1.25em"}],
      xl: ["9px", {lineHeight: "1.55em"}],
      "2xl": ["9px", {lineHeight: "1.53em"}],
      "3xl": ["13px", {lineHeight: "1.54em"}],
      "4xl": ["13px", {lineHeight: "1.53em"}],
      "5xl": ["18px", {lineHeight: "1.5em"}],
      "6xl": ["20px", {lineHeight: "30px"}],
      "7xl": ["22px", {lineHeight: "1.55em"}],
      "8xl": ["24px", {lineHeight: "1.42em"}],
      "9xl": ["26px", {lineHeight: "1.31em"}],
      "10xl": ["27px", {lineHeight: "1.51em"}],
      "11xl": ["30px", {lineHeight: "1.33em"}],
      "12xl": ["30px", {lineHeight: "1.12em"}],
      "13xl": ["36px", {lineHeight: "1.1em"}],
      "14xl": ["60px", {lineHeight: "1.37em"}],
      "15xl": ["90px", {lineHeight: "1.11em"}],
      "16xl": ["100px", {lineHeight: "1em"}],
      "17xl": ["100px", {lineHeight: "1.1em"}],
      "18xl": ["136px", {lineHeight: "1.11em"}],
    },
    
    boxShadow: {
      sm: "0px 1px 21px rgba(24.84, 71.50, 97.75, 0.19)",
      md: "0px 0px 6px rgba(24.84, 71.50, 97.75, 0.19)",
      lg: "0px 1px 21px 0px rgba(25, 72, 98, 0.19)",
      input: "1px 1px 10px rgba(0, 0, 0, 0.25)",
    },
    dropShadow: {
      sm: "1px 1px 20px rgba(0, 0, 0, 0.36)",
      md: "0.16670000553131104px 0.16670000553131104px 3.3340001106262207px rgba(0, 0, 0, 0.36)",
    },
    fontFamily: {"dm-sans": ["'DM Sans'", ...fontFamily.sans]},
    backgroundImage: {
      headerBG: "url('/images/family_food.jpg')",
      headerBGMob: "url('/images/family_food_mob.jpg')",
      missionBG: "url('/images/mission.jpg')",
      missionMob: "url('/images/mission-mob.jpg')",
      whitrlistBG: "url('/images/whitelist.jpg')",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1640px",
    },
  },
  plugins: [],
};
export default config;