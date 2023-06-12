"use client";

import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import {
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";
import { Product } from "@prisma/client";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "@/redux/cart-slice";
import { AppDispatch } from "@/redux/store";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { hideToast } from "@/redux/toaster-slice";
import useToaster from "@/app/login/useToaster";
import { redirect} from "next/navigation"
import { useSession } from "next-auth/react";
interface ProductInfoSectionProps {
  product: Product | null;
}

const ProductInfoSection: FC<ProductInfoSectionProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToaster()
  const session = useSession()


  const [amount, setAmount] = useState<number>(1);

  const addAmount = (): void => {
    setAmount((prev) => (prev === 99 ? prev : prev + 1));
  };
  const removeAmount = (): void => {
    setAmount((prev) => (prev === 1 ? prev : prev - 1));
  };

  const addProduct = (): void => {
    if (product) {
      if(session.status === "authenticated") {
        dispatch(addToCart({ ...product, amount }));
        toast({message: "Added product to cart",type:"success"})
      } else {
        toast({message: "You need to log in",type: "danger"})
        redirect("/login")
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="font-extrabold text-2xl">{product?.title}</h1>
      <span className="text-sm text-gray-500">{product?.description}</span>
      <p className="text-2xl font-bold">{product?.price}zł</p>

      {/* Item amount counter */}
      <div className="bg-gray-200 rounded-full flex justify-between items-center ">
        <button
          className="hover:bg-gray-300 rounded-l-full py-2 px-5 font-bold text-xl"
          onClick={() => removeAmount()}
        >
          <MinusSmallIcon className="h-6 w-6" />
        </button>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="hide-numberinput w-12 outline-none bg-gray-200 font-semibold text-center"
        />
        <button
          className="hover:bg-gray-300 rounded-r-full py-2 px-5 font-bold text-xl"
          onClick={() => addAmount()}
        >
          <PlusSmallIcon className="h-6 w-6" />
        </button>
      </div>

      <Button className="my-4" onClick={() => addProduct()}>
        Add to Card
      </Button>

      {/* Informations */}
      <div className="class border boder-gray-500 rounded-xl divide-y">
        <div className="p-5 flex gap-2">
          <ArchiveBoxIcon className="h-8 w-8 text-orange-400" />
          <div>
            <h1 className="font-bold">Free Delivery</h1>
            <p className="text-gray-500 text-sm">
              In current month every single order has free delivery.
            </p>
          </div>
        </div>
        <div className="p-5 flex gap-2">
          <ArrowUturnLeftIcon className="h-8 w-8 text-orange-400" />
          <div>
            <h1 className="font-bold">Return Delivery</h1>
            <p className="text-gray-500 text-sm">
              Free 30days Delivery Returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection;
