// import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="bg-banner w-full object-left-bottom col-span-2"
      style={{
        backgroundImage: `url('/assets/furniture.png')`,
        backgroundSize: "cover",
        height: "500px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-2/4 p-5">
        <h3 className="text-5xl font-bold text-yellow-600">Home modern furniture</h3>
        <p className="text-slate-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio
          ratione modi corrupti totam veritatis mollitia beatae, sequi amet
          deserunt suscipit tempora ea iure aliquid. Illum sequi aut laudantium
          minus.
        </p>
      </div>
    </div>
  );
};
export default Banner;
