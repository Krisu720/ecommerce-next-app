"use client";

import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "@/redux/cart-slice";
import { AppDispatch } from "@/redux/store";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { hideToast } from "@/redux/toaster-slice";
import useToaster from "@/lib/useToaster";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Informations from "../Informations";
interface ProductInfoSectionProps {
  product: Product | null;
}

const ProductInfoSection: FC<ProductInfoSectionProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToaster();
  const session = useSession();

  const [amount, setAmount] = useState<number>(1);

  const addAmount = (): void => {
    setAmount((prev) => (prev === 99 ? prev : prev + 1));
  };
  const removeAmount = (): void => {
    setAmount((prev) => (prev === 1 ? prev : prev - 1));
  };

  const addProduct = (): void => {
    if (product) {
      if (session.status === "authenticated") {
        dispatch(addToCart({ ...product, amount }));
        toast({ message: "Added product to cart", type: "success" });
      } else {
        toast({ message: "You need to log in", type: "danger" });
        redirect("/login");
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-2xl font-extrabold">{product?.title}</h1>
      <span className="text-sm text-gray-500">{product?.description}</span>
      <p className="text-2xl font-bold">{product?.price}zł</p>

      {/* Item amount counter */}
      <div className="flex items-center justify-between rounded-full bg-gray-200 ">
        <button
          className="rounded-l-full px-5 py-2 text-xl font-bold hover:bg-gray-300"
          onClick={() => removeAmount()}
        >
          <MinusSmallIcon className="h-6 w-6" />
        </button>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="hide-numberinput w-12 bg-gray-200 text-center font-semibold outline-none"
        />
        <button
          className="rounded-r-full px-5 py-2 text-xl font-bold hover:bg-gray-300"
          onClick={() => addAmount()}
        >
          <PlusSmallIcon className="h-6 w-6" />
        </button>
      </div>

      <Button className="my-4" onClick={() => addProduct()}>
        Add to Card
      </Button>

      {/* Informations */}
      <Informations />
    </div>
  );
};

export default ProductInfoSection;
