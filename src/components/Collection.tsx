import { Carousel } from "flowbite-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Home Decore",
    href: "#",
    imageSrc: "/assets/chair-2.jpg",
    imageAlt: "Picture is not given",
    item: "8 items",
  },
  {
    id: 2,
    name: "Home Decore",
    href: "#",
    imageSrc: "/assets/sofa.jpg",
    imageAlt: "Picture is not given",
    item: "8 items",
  },
  {
    id: 3,
    name: "Home Decore",
    href: "#",
    imageSrc: "/assets/chair.jpg",
    imageAlt: "Picture is not given.",
    item: "8 items",
  },
  {
    id: 4,
    name: "Home Decore",
    href: "#",
    imageSrc: "/assets/table-1.jpg",
    imageAlt: "Picture is not given.",
    item: "8 items",
  },
  // More products...
];

export default function Collection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-7xl">
        <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900">
          Our Collection
        </h2>
        <div className="border-b-2 border-yellow-600 w-24 text-center m-auto"></div>

        {/*  */}
        <div className="object-none sm:flex h-56 md:h-96 xl:h-80 2xl:h-96 md:object-center lg:hidden md:hidden p-2 sm:p-3">
          <Carousel>
            <Image width="200" height="100" src="/assets/chair-2.jpg" alt="..." />
            <Image width="200" height="100" src="/assets/sofa.jpg" alt="..." />
            <Image width="200" height="100" src="/assets/table-1.jpg" alt="..." />
            <Image width="200" height="100" src="/assets/chair.jpg" alt="..." />
          </Carousel>
        </div>
        {/*  */}

        <div className="hidden md:flex lg:flex justify-center">
          <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
                  <Image width="200" height="100"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  <div className="absolute bottom-0 flex justify-between left-0 right-0 p-3 m-2 bg-white transition duration-300 hover:bg-black">
                    <h3 className="text-sm text-gray-700 hover:text-white">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="text-gray-700 text-sm hover:text-white">
                      ({product.item})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
