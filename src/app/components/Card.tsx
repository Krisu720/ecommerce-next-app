import { FC } from "react";
import Button from "../components/ui/Button";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="bg-gray-100 rounded-lg">
        <img src="./headphones.png" alt="" />
      </div>
      <div className="flex flex-col gap-1 items-start mt-2 w-full">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold">Gaming Headphones</h1>
          <span className="font-semibold">400zł</span>
        </div>
        <p className="text-xs text-gray-500">
          Stereo,noise cancelation headphones
        </p>
      </div>
      <Button href="/products/id" className="mt-2">Add to Cart</Button>
    </div>
  );
};

export default Card;
