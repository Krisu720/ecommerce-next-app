import { FC } from "react";


const Banner: FC = ({}) => {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-orange-100 px-12 py-6 md:h-96 md:flex-row md:py-0">
      <div className="flex flex-col items-start">
        <span className="text-4xl font-extrabold tracking-tighter text-green-800 ">
          Grab Upto 25% Off on Sneakers using promocode.
        </span>
        <span className="mt-2">Code: sneakers2023</span>
      </div>
      <img src="./sneakers.png" className="md:h-full" alt="" />
    </div>
  );
};

export default Banner;
