"use client";

import { FC, useContext } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { AppDispatch, useAppSelector } from "@/redux/store";
import DeliveryInformationForm from "./DeliveryInformationForm";
import OrderSummaryForm from "./OrderSummaryForm";
import { useDispatch } from "react-redux";
import { changeAmount, getSubtotal, removeFromCart } from "@/redux/cart-slice";
import CartItem from "@/components/CartItem";

interface pageProps {}

const deliveryPrice:number = 9;

const page: FC<pageProps> = ({}) => {
  const cart = useAppSelector((state) => state.cartReducer.value.products);
  return (
    <div className="md:flex">
      <div className="md:w-2/3">
        <div className="border rounded-xl border-gray-200 p-5">
          <h1 className="font-bold text-2xl">Items</h1>
          {cart.length > 0 ? (
            cart.map((i) => (
             <CartItem key={i.id} {...i} />
            ))
          ) : (
            <h1 className="text-gray-500 text-2xl flex justify-center items-center font-semibold my-6">
              No items in cart
            </h1>
          )}
        </div>
        <div className="border rounded-xl border-gray-200 p-5 mt-6">
          <h1 className="font-bold text-2xl">Delivery Infomation</h1>
          <DeliveryInformationForm />
        </div>
      </div>
      <div className="md:w-1/3 md:ml-5 mt-5 md:mt-0">
        <div className="md:sticky md:top-5">
          <div className="border rounded-xl border-gray-200 p-5">
            <h1 className="font-bold text-2xl">Order Summary</h1>
            <OrderSummaryForm />
            <div className="divide-y mt-3">
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex justify-between">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold">{getSubtotal(cart)}zł</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Delivery</p>
                  <p className="font-semibold">{deliveryPrice}zł</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Discount Code</p>
                  <p className="font-semibold">-10zł</p>
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <p className="font-extrabold">Total</p>
                <p className="font-extrabold">{getSubtotal(cart)+deliveryPrice}zł</p>
              </div>
              <Button className="w-full mt-3 py-3">Pay 390zł</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
