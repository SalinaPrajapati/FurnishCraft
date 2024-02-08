"use client";

import Timer from "@/components/Timer";
import { HiShoppingCart, HiHeart } from "react-icons/hi";
import { useState } from "react";
import { products } from "@/utils/product";

export default function Product() {
  const [isHovered, setIsHovered] = useState(false);

  const myStyle = {
    bottom: "30.2rem",
    top: "-11px",
    height: "30px",
  };
  return (
    <div className="relative md:m-14 m-5 p-5 md:p-8 h-auto w-80 md:h-96 md:w-11/12 border-solid border-2 border-sky-500">
      <div className="absolute left-6 hidden sm:block" style={myStyle}>
        <Timer></Timer>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 h-auto">
        {products.map((product: any, index: number) => (
          <div
            key={index}
            className="h-auto w-full flex-none md:flex align-middle"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="max-w-[18rem]"
            >
              <div className="max-w-[18rem] h-72 inline-block align-middle relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={
                    isHovered
                      ? product.images[0].image
                      : product.images[0].picture
                  }
                  className="transition ease-in-out hover:delay-150 hover:duration-300 hover:transition-all hover:scale-110 object-cover h-full w-full m-auto"
                />
              </div>
            </div>
            <div className="flex justify-between mt-2 p-2 border-solid rounded-lg border w-24 m-auto border-sky-500">
              <span className="flex justify-center items-center">
                <HiShoppingCart style={{ fontSize: "24px" }} />
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex justify-center items-center">
                <HiHeart style={{ fontSize: "24px" }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
