import { FC } from "react";
import CustomContainer from "../components/ui/CustomContainer";
import Card from "../components/Card";
import Button from "../components/ui/Button";

const items = [1, 2, 3, 4, 5, 6];

const page: FC = ({}) => {
  return (
    <div>
      <div className="rounded-lg w-full h-96 bg-orange-100 px-12 flex items-center">
        <div className="flex flex-col items-start">
          <span className="text-4xl text-green-800 font-extrabold tracking-tighter">
            Grab Upto 25% Off on Sneakers using promocode.
          </span>
          <span className="text-green-300 bg-green-800 px-2 py-2 rounded-lg mt-2">
            Code: sneakers2023
          </span>
        </div>

        <img src="./sneakers.png" className="h-full" alt="" />
      </div>

      <div className="py-6 flex justify-end">
        <Button>Sort by</Button>
      </div>

      <h1 className="font-extrabold tracking-tighter text-4xl my-3">
        Our Products
      </h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {items.map((i) => (
          <div className="p-3">
            <Card key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
