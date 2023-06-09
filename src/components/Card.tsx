import { FC } from "react";
import Button from "../components/ui/Button";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  id:number;
}

const Card: FC<CardProps> = ({ title, description, price, image, id}) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <Link href={`/products/${id}`} className="bg-gray-100 rounded-lg h-80 flex items-center justify-center overflow-hidden group">
        <img src={image} className="group-hover:scale-90 transition-transform cursor-pointer" alt="" />
      </Link>
      <div className="flex flex-col gap-1 items-start mt-2 w-full">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold">{title}</h1>
          <span className="font-semibold">{price}zł</span>
        </div>
        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>
      <Button href={`/products/${id}`} className="mt-2">
        Check product
      </Button>
    </div>
  );
};

export default Card;
