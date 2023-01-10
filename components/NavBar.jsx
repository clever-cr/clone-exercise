import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="bg-transparent absolute w-full pt-4 sm:pt-0">
      <div className=" text-white px-[120px] sm:px-0">
        <div className="flex justify-between sm:hidden ">
          <div className="gap-4 flex">
            <Link href="#">careers</Link>
            <Link href="#">Newsroom</Link>
          </div>
          <div className="flex gap-12">
            <div className="flex items-center">
              <picture>
                <img src="/location2.png" alt="h" />
              </picture>
              <Link href="#">Global</Link>
            </div>

            <Link href="#">English</Link>
          </div>
        </div>

        <div className="flex space-x-[30px] bg-white py-[22px] px-[25px] mt-4 justify-between sm:mt-0">
          <picture>
            <img className="sm:w-36" src="/logo.png" alt="logo" />
          </picture>
          <div className="flex items-center space-x-[30px]">
            <div className="flex space-x-4 text-black sm:hidden">
              {[
                "Services",
                "Industries",
                "Insights",
                "Investors",
                "About us",
              ].map((item, index) => {
                return (
                  <Link key={index} href="page">
                    {item}
                  </Link>
                );
              })}
            </div>

            <picture>
              <img className="w-6" src="/search.svg" alt="search" />
            </picture>
            <picture>
              <img className="hidden sm:block w-6" src="menu.svg" alt="menu" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
