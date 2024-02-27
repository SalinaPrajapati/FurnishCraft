"use client";

import Timer from "@/components/Timer";
import { HiShoppingCart, HiHeart } from "react-icons/hi";
import { useState } from "react";
import { products } from "@/utils/product";

export default function Product() {
  const [isHovered, setIsHovered] = useState(false);
  const [productsState, setProductsState] = useState(products.map(() => ({ isHovered: false })));

  const handleHoverChange = (index:any, isHovered:any) => {
    const updatedProducts = [...productsState];
    updatedProducts[index].isHovered = isHovered;
    setProductsState(updatedProducts);
  };

  const myStyle = {
    bottom: "30.2rem",
    top: "-11px",
    height: "30px",
  };
  return (
    <div className="relative md:m-auto m-5 p-5 md:p-8 h-auto md:h-96 md:w-4/5 border-solid border-2 border-sky-500">
      <div className="absolute left-6 hidden sm:block" style={myStyle}>
        <Timer></Timer>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 h-auto">
        {products.map((product: any, index: number) => (
          <div
            key={index}
            className="h-auto w-full flex-none md:flex align-middle justify-evenly items-center"
          >
            <div
              onMouseEnter={() => handleHoverChange(index, true)}
              onMouseLeave={() => handleHoverChange(index, false)}
              className="max-w-[18rem]"
            >
              <div className="max-w-[18rem] h-72 flex item relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={
                    productsState[index].isHovered
                      ? product.images[0].image
                      : product.images[0].picture
                  }
                  className="transition ease-in-out hover:delay-150 hover:duration-300 hover:transition-all hover:scale-110 object-cover h-full w-full m-auto"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-between mt-2 p-2 border-solid rounded-lg border w-24 border-sky-500">
                <span className="flex justify-center items-center">
                  <HiShoppingCart style={{ fontSize: "24px" }} />
                </span>
                <span className="text-slate-700">|</span>
                <span className="flex justify-center items-center">
                  <HiHeart style={{ fontSize: "24px" }} />
                </span>
              </div>
              <div className="mt-6 text-xl font-extrabold">
                <p>{product.name}</p>
                </div>
                <div className="mt-1">
                  <p>{product.price}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
