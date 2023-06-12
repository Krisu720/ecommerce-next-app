"use client";

import { FC, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/redux/store";
import DeliveryInformationForm from "./DeliveryInformationForm";
import OrderSummaryForm from "./OrderSummaryForm";
import { getSubtotal } from "@/redux/cart-slice";
import CartItem from "@/components/CartItem";
import { Promocode } from "@prisma/client";
import useToaster from "@/app/login/useToaster";
import * as Dialog from "@radix-ui/react-dialog";
import DemoDialog from "@/components/DemoDialog";

interface pageProps {}

const deliveryPrice: number = 9;

const page: FC<pageProps> = ({}) => {
  const toast = useToaster();

  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const citytownRef = useRef<HTMLInputElement>(null);
  const zipcodeRef = useRef<HTMLInputElement>(null);
  const mobilenumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("paypal");
  const [code, setCode] = useState<Promocode | null>(null);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const codeRef = useRef<HTMLInputElement>(null);
  const cart = useAppSelector((state) => state.cartReducer.value.products);

  const submitOrder = (): void => {
    finalObject = {
      firstName: firstnameRef.current?.value,
      lastName: lastnameRef.current?.value,
      address: addressRef.current?.value,
      cityTown: citytownRef.current?.value,
      zipCode: zipcodeRef.current?.value,
      mobileNumber: mobilenumberRef.current?.value,
      email: emailRef.current?.value,
      paymentMethod: value,
      code,
    };
    console.log(finalObject);
  };

  let finalObject = {
    firstName: firstnameRef.current?.value,
    lastName: lastnameRef.current?.value,
    address: addressRef.current?.value,
    cityTown: citytownRef.current?.value,
    zipCode: zipcodeRef.current?.value,
    mobileNumber: mobilenumberRef.current?.value,
    email: emailRef.current?.value,
    paymentMethod: value,
    code,
  };

  const checkCode = async (): Promise<void> => {
    if (codeRef.current?.value) {
      setCodeLoading(true);
      const res = await fetch(`/api/promocode/${codeRef.current.value}`);
      const data: Promocode | null = await res.json();
      if (data) {
        setCode(data);
        toast({ message: "Code has been applied", type: "success" });
      } else {
        toast({ message: "Invalid code", type: "danger" });
      }
      setCodeLoading(false);
    }
  };

  console.log("Parent refresh");

  return (
    <div className="md:flex">
      <div className="md:w-2/3">
        <div className="border rounded-xl border-gray-200 p-5">
          <h1 className="font-bold text-2xl">Items</h1>
          {cart.length > 0 ? (
            cart.map((i) => <CartItem key={i.id} {...i} />)
          ) : (
            <h1 className="text-gray-500 text-2xl flex justify-center items-center font-semibold my-6">
              No items in cart
            </h1>
          )}
        </div>
        <div className="border rounded-xl border-gray-200 p-5 mt-6">
          <h1 className="font-bold text-2xl">Delivery Infomation</h1>
          <DeliveryInformationForm
            firstnameRef={firstnameRef}
            citytownRef={citytownRef}
            emailRef={emailRef}
            addressRef={addressRef}
            lastnameRef={lastnameRef}
            mobilenumberRef={mobilenumberRef}
            zipcodeRef={zipcodeRef}
          />
        </div>
      </div>
      <div className="md:w-1/3 md:ml-5 mt-5 md:mt-0">
        <div className="md:sticky md:top-5">
          <div className="border rounded-xl border-gray-200 p-5">
            <h1 className="font-bold text-2xl">Order Summary</h1>
            <OrderSummaryForm
              value={value}
              setValue={setValue}
              checkCode={checkCode}
              codeRef={codeRef}
              setCode={setCode}
              code={code}
              codeLoading={codeLoading}
            />
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
                {code && (
                  <div className="flex justify-between">
                    <p className="font-semibold">
                      Discount Code:{" "}
                      <span className="text-gray-500 text-sm">{code.name}</span>
                    </p>
                    <p className="font-semibold">-{code.price}zł</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between pt-2">
                <p className="font-extrabold">Total</p>
                <p className="font-extrabold">
                  {getSubtotal(cart) + deliveryPrice}zł
                </p>
              </div>
              <Dialog.Root defaultOpen>
                <Dialog.Trigger asChild>
                  <Button
                    className="w-full mt-3 py-3"
                    onClick={() => submitOrder()}
                  >
                    Pay {getSubtotal(cart)}zł
                  </Button>
                </Dialog.Trigger>
                {}
                <DemoDialog {...finalObject} />
              </Dialog.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
