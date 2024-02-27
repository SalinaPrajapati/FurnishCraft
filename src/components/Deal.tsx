// import Image from "next/image";
import { Button } from "@/components/ui/button";
const Deal = () => {
  return (
    <div
      className="object-left-bottom w-full my-28 "
      style={{
        backgroundImage: `url('/assets/yellow.jpg')`,
        backgroundSize: "cover",
        height: "420px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative top-full text-center">
          <div className="absolute bottom-0 w-full h-92 md:flex hidden">
            <img
              className="object-contain w-1/2 h-full"
              src="/assets/bg-chair.png"
              alt=""
            />
          </div>
      </div>
          <div className="flex flex-col absolute right-0 w-full md:w-2/4 pt-24 h-full p-8">
            <h3 className="mb-5 text-4xl md:text-5xl font-bold text-yellow-600">
              Deal of the day
            </h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              distinctio ratione modi corrupti totam veritatis mollitia beatae,
              sequi amet deserunt suscipit tempora ea iure aliquid. Illum sequi aut
              laudantium minus.
            </p>
            <div>
              <Button className="mt-5 text-white bg-yellow-600 hover:bg-yellow-500">
                Shop now
              </Button>
            </div>
          </div>
    </div>
  );
};
export default Deal;
