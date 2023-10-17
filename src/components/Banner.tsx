// import Image from "next/image";
import { Button } from "@/components/ui/button"
const Banner = () => {
  return (
    <div
      className="object-left-bottom w-full col-span-2 mt-6"
      style={{
        backgroundImage: `url('/assets/furniture.png')`,
        backgroundSize: "cover",
        height: "450px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center w-2/4 h-full p-8">
        <h3 className="mb-5 text-5xl font-bold text-yellow-600">Home modern furniture</h3>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio
          ratione modi corrupti totam veritatis mollitia beatae, sequi amet
          deserunt suscipit tempora ea iure aliquid. Illum sequi aut laudantium
          minus.
        </p>
        <div><Button className="mt-5 text-white bg-yellow-600 hover:bg-yellow-500">Shop now</Button></div>
      </div>
    </div>
  );
};
export default Banner;
