import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/bg.jpeg')] h-screen bg-cover">
      <div className=" text-white h-[450px] top-56 relative px-[120px] space-y-[18px] sm:px-5 sm:top-32">
        <h3 className="text-[40px] leading-[55px] font-semibold sm:text-[27px] sm:leading-[34px]">
          Digital Banking Experience Report 2022 - Banks digital maturity &
          priorities alongside customer expectations
        </h3>
        <button className="text-[15px] leading-[24px] font-semibold bg-[rgb(152,32,43)] py-[10px] px-[25px]">
          Discover the key findings
        </button>
      </div>
    </div>
  );
};

export default Hero;
