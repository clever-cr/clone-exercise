import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-[120px] bg-[#F2F2F2] mt-[40px] sm:px-5">
      <div className="flex items-center justify-between pt-[10px] sm:flex-col space-y-2">
        <div className="space-y-2">
          <picture>
            <img src="/logo.png" alt="img" />
          </picture>
          <p>The world is how we shape it</p>
        </div>
        <div className="flex gap-x-[20px]">
          <picture>
            <img
              className="border border-black p-2 text-center"
              src="/twitter.svg"
              alt=""
            />
          </picture>
          <picture>
            <img
              className="border border-black p-2 text-center"
              src="/twitter.svg"
              alt=""
            />
          </picture>
          <picture>
            <img
              className="border border-black p-2 text-center"
              src="/twitter.svg"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="pt-[51px] flex gap-x-[20px] sm:flex-col items-center">
        {[
          "Manageyourcookies",
          "Contact us",
          "Terms of use",
          "Personal data protection charter",
          "Warning alert - scam / identify theft",
          "Site map",
          "Accessibility",
        ].map((item, index) => {
          return (
            <Link href="#" key={index}>
              {" "}
              {item}
            </Link>
          );
        })}
      </div>
      <div>
        <p className="sm:text-center">Sopra Steria 2023©</p>
      </div>
    </div>
  );
};

export default Footer;
