"use client";

import Timer from "@/components/Timer";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
export default function Product() {
  const [isHovered, setIsHovered] = useState(false);

  const myStyle = {
    bottom: "30.2rem",
  };
  return (
    <div className="relative m-14 p-9 border-solid border-2 border-sky-500">
      <div className="absolute left-6" style={myStyle}>
        <Timer></Timer>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? "/assets/sofa.jpg" : "/assets/chair-2.jpg"}
            className="transition ease-in-out hover:delay-150 hover:duration-300 hover:transition-all hover:scale-110"
          />
        </div>
        <div className="flex justify-between w-20 h-12 border-solid border-2 border-sky-500 items-center">
            <span className="border-r-2 border-sky-500 h-full w-10 flex justify-around items-center">
              <HiShoppingCart style={{ fontSize: "24px" }} />
            </span>
            <span className="h-full w-10 flex justify-around items-center">
              <HiShoppingCart style={{ fontSize: "24px" }} />
            </span>
        </div>
        {/* <div>
          <img src="/assets/sofa.jpg" className="" />
        </div> */}
      </div>
    </div>
  );
}
