import React from "react";

const New = () => {
  return (
    <div className="px-[120px] pt-[30px] sm:px-5">
      <div className="space-y-[20px]">
        <h3 className="text-[35px] leading-[39px]">Whats New</h3>

        <div className="flex space-x-[60px]- gap-x-[60px] sm:flex-col">
          <picture>
            <img
              className="w-[590px] h-[370px] flex-1-  "
              src="/sesar.jpg"
              alt="img"
            />
          </picture>
          <div className="flex flex-col space-y-[25px] flex-1">
            <h3 className="text-[28px] leading-[36px] font-bold sm:text-lg sm:leading-[25px]">
              Sopra Steria is contributing to the creation of a sustainable and
              strong Single European Sky
            </h3>
            <p className="text-[#6c757d] text-[18px] leading-[30px] sm:text-base sm:leading-[26px]">
              Jan 10, 2023
            </p>
            <p className="text-[18px] leading-[30px] sm:text-base sm:leading-[26px]">
              The SESAR 3 Joint Undertaking (JU), a European partnership tasked
              with the digital transformation of European Air Traffic Management
              (ATM), has awarded the Sopra Steria-Egis consortium the SESAR 3
              Development Support Service (S3DSS) contract. The objective of
              this project is to support the programme management activities for
              the implementation and monitoring of the organisation’s research
              activities.
            </p>
            <div>
              <button className="py-[20px] px-[25px]  text-[15px] leading-[24px] bg-[white] border font-bold border-black">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
