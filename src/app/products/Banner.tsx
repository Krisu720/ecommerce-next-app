import { FC } from "react";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="rounded-lg w-full py-6 md:py-0 md:h-96 bg-orange-100 px-12 flex flex-col md:flex-row items-center overflow-hidden">
      <div className="flex flex-col items-start">
        <span className="text-4xl text-green-800 font-extrabold tracking-tighter ">
          Grab Upto 25% Off on Sneakers using promocode.
        </span>
        <span className="mt-2">
          Code: sneakers2023
        </span>
      </div>
      <img src="./sneakers.png" className="md:h-full" alt="" />
    </div>
  );
};

export default Banner;
