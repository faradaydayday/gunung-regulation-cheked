import React from "react";
import HeroImage from "../components/HeroImage";
import HeroStats from "../components/HeroStats";

function HeroSection() {
  return (
    <>
      <div className=" relative -z-10 mt-24 ">
        <HeroImage />
        <HeroStats />
      </div>  
    </>
  );
}

export default HeroSection;
