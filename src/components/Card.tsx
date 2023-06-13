import { FC } from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

const Card: FC<CardProps> = ({ title, description, price, image, id }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Link
        href={`/products/${id}`}
        className="group flex h-80 items-center justify-center overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src={image}
          className="cursor-pointer transition-transform group-hover:scale-90 group-active:scale-75"
          alt=""
        />
      </Link>
      <div className="mt-2 flex w-full flex-col items-start gap-1">
        <div className="flex w-full justify-between">
          <h1 className="font-semibold">{title}</h1>
          <span className="font-semibold">{price}zł</span>
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Card;
