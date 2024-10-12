import React, { useEffect, useState } from "react";

const HeroStats = () => {
  const [rate, setRate] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [difficulties, setDifficulties] = useState(0);

  // Function to handle the increment of stats
  const animateValue = (setter, targetValue, duration) => {
    let startValue = 0;
    const increment = targetValue / (duration / 10);

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= targetValue) {
        startValue = targetValue;
        clearInterval(interval);
      }
      setter(Math.round(startValue));
    }, 10);
  };

  useEffect(() => {
    // Animating the stats with different durations
    animateValue(setRate, 22, 1000);
    animateValue(setCompanies, 4000, 1000);
    animateValue(setDifficulties, 75, 1000);
  }, []);

  return (
    <div
      data-aos="fade-left"
      className=" text-9xl lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r"
    >
      <div className="sticky top-0 start-0 py-8 lg:ps-8 ">
        <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Rate Engine */}
            <div className="text-center stat">
              <p className="mt-1 sm:mt-2 text-3xl sm:text-4xl font-bold text-[#353535]">
                {rate}+
              </p>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 ">
               Gunung Terdaftar
              </h4>
            </div>

            {/* Game Company */}
            <div className="text-center stat">
              <p className="mt-1 sm:mt-2 text-3xl sm:text-4xl font-bold text-[#353535]">
                {companies}+
              </p>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                Total Pendaki
              </h4>
            </div>

            {/* User Difficulties */}
            <div className="text-center stat">
              <p className="mt-1 sm:mt-2 text-3xl sm:text-4xl font-bold text-[#353535]">
                {difficulties}<span className="text-[2rem]" >t</span>
              </p>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 ">
                Sampah Bag
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
