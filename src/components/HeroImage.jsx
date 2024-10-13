import React from "react";
import HeroGunung from "../assets/svgs/HeroGunung.svg";
import GunungBawakaraeng from "../assets/images/bawakaraengng.jpeg";

const HeroImage = () => {
  const buttonStyle = {
    transition: "background-opacity 0.3s, cursor 0.3s",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
    },
  };
  return (
    <div className="relative mx-5 h-[400px] rounded-lg overflow-hidden  ">
      <img
        src={HeroGunung}
        alt="Mountain landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-semibold font-poppins text-center mb-4">
           Jaga kebersihan Puncak
          <br />
             Masa Depan Alam
        </h1>
        <button
          className="bg-white text-black py-2 px-6 rounded-full font-semibold  "
          style={buttonStyle}
        >
          Mulai Pendakian
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
