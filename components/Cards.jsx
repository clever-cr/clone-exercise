import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import React from "react";

const Cards = () => {
  const data = [
    {
      img: "/pic1.jpg",
      title:
        "Within the CDP A List for the 6th consecutive year, Sopra Steria confirms its commitment to the climate",
      date: "Dec 20, 2022",
      description:
        "Climate action is at the core of Sopra Steria's sustainable development and corporate responsibility programs. Its renewed inclusion in the CDP's A list for the sixth-year running is a reward for the Group's commitment to fighting global warming.",
    },
    {
      img: "/pic1.jpg",
      title:
        "Within the CDP A List for the 6th consecutive year, Sopra Steria confirms its commitment to the climate",
      date: "Dec 20, 2022",
      description:
        "Climate action is at the core of Sopra Steria's sustainable development and corporate responsibility programs. Its renewed inclusion in the CDP's A list for the sixth-year running is a reward for the Group's commitment to fighting global warming.",
    },
    {
      img: "/pic1.jpg",
      title:
        "Within the CDP A List for the 6th consecutive year, Sopra Steria confirms its commitment to the climate",
      date: "Dec 20, 2022",
      description:
        "Climate action is at the core of Sopra Steria's sustainable development and corporate responsibility programs. Its renewed inclusion in the CDP's A list for the sixth-year running is a reward for the Group's commitment to fighting global warming.",
    },
  ];
  return (
    <div className="px-[120px] pt-[70px] sm:px-5">
      <div className="flex gap-x-[41px] pt-[10px] sm:flex-col sm:space-y-8">
        {data.map((item, index) => {
          return (
            <div key={index} className="space-y-[22px]">
              <picture>
                <img src={item.img} alt="k" />
              </picture>
              <h3 className="text-[22px] leading-[30px] font-bold hover:text-[#98202B] sm:text-lg sm:leading-[25px]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-[27px] text-[#6c757d] sm:text-base sm:leading-[26px]">
                {item.date}
              </p>
              <p className="text-[17px] leading-[27px] sm:text-base sm:leading-[26px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
