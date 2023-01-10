import React from "react";

const Corporate = () => {
  return (
    <div className="px-[120px] pt-16 sm:px-5 sm:mb-40">
      <div className="relative">
        <picture>
          <img src="/corporate.jpeg" alt="" />
        </picture>
        <div className="absolute bg-white bottom-6 pl-[45px] pr-[20px] flex-col space-y-[20px] w-[744px] h-[365px] sm:w-fit sm:p-0 sm:top-14 sm:left-2 sm:right-2 sm:pl-5 sm:pr-10">
          <h3 className="text-[28px] leading-[36px] font-bold max-w-sm- pt-6 sm:text-[20px] sm:leading-[28px] font-bol">
            Corporate responsibility Sopra Steria, a committed responsible
            enterprise
          </h3>
          <p className="text-[17px] leading-[28px] sm:text-base sm:leading-[26px]">
            We, at Sopra Steria, firmly believe that digital is a source of
            opportunities and progress for all. Combined to a human dimension,
            it creates a virtuous circle benefiting society as a whole.
          </p>
          <button className="text-[15px] leading-[24px] font-semibold bg-[#98202B] py-[10px] px-[25px] text-white">
            Learn more about corporate Responsibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
