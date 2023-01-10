import React from "react";

const Finacial = () => {
  return (
    <div className="px-[120px] pt-[80px] sm:px-5">
      <h3 className="text-[35px] leading-[39px]">Financial Report</h3>
      <div className="flex gap-x-[60px] pt-[20px] sm:flex-col space-y-8">
        <picture>
          <img className="w-[590px] h-[370px]" src="/urd.jpeg" alt="urd" />
        </picture>
        <div className="flex flex-col space-y-[25px] ">
          <h3 className="text-[28px] leading-[36px] font-bold">
            2021 Universal Registration Document
          </h3>
          <p className="text-[#6c757d] text-[18px] leading-[30px]">
            Mar 17, 2022
          </p>
          <div className="flex gap-2">
            <p className="text-[18px] leading-[30px] underline underline-[rgb(152,32,43)]">
              Interactive link
            </p>
            <p className="text-[18px] leading-[30px]">xHTML Link </p>
          </div>

          <div>
            <button className="py-[20px] px-[25px]  text-[15px] leading-[24px] bg-[white] border font-bold border-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finacial;
