import React from "react";
import Intro from "./home/Intro";
import Landscape from "./home/Landscape";
import Introduce from "./home/Introduce";
import Mission from "./home/Mission";
import Features from "./home/Features";
import Comparisons from "./home/Comparisons";
import Waitlist from "./home/Waitlist";

function page() {
  return (
    <div>
      <Intro />
      <Landscape />
      <Introduce />
      <Mission />
      <Features />
      <Comparisons />
      {/* <Waitlist /> */}
    </div>
  );
}

export default page;
