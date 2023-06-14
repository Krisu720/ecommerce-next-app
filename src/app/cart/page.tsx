"use client";

import { FC, useCallback, useRef, useState, useMemo, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/redux/store";
import DeliveryInformationForm from "../../components/forms/DeliveryInformationForm";
import OrderSummaryForm from "../../components/forms/OrderSummaryForm";
import { getSubtotal } from "@/redux/cart-slice";
import CartItem from "@/components/CartItem";
import { Promocode } from "@prisma/client";
import useToaster from "@/lib/useToaster";
import DemoDialog from "@/components/DemoDialog";
import { CartObject } from "@/types/types";
interface pageProps {}

const deliveryPrice: number = 9;

const Page: FC<pageProps> = ({}) => {
  const toast = useToaster();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [radio, setRadio] = useState<string>("paypal");

  const [code, setCode] = useState<Promocode | null>(null);
  const [codeLoading, setCodeLoading] = useState<boolean>(false);
  const codeRef = useRef<HTMLInputElement>(null);

  const cart = useAppSelector((state) => state.cartReducer.value.products);

  const [value, setValue] = useState<CartObject>({
    address: "",
    cityTown: "",
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    zipCode: "",
  });

  useEffect(() => {
    //checking if something from value has empty string if true set button disabled
    let checkedEmpty = false;
    for (const [key, val] of Object.entries(value)) {
      if (val === "") {
        checkedEmpty = true;
      }
    }
    if (!checkedEmpty) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const setCartObject = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-2/3">
        <div className="rounded-xl border border-gray-200 p-5">
          <h1 className="text-2xl font-bold">Items</h1>
          {cart.length > 0 ? (
            cart.map((i, index) => <CartItem key={index} {...i} />)
          ) : (
            <h1 className="my-6 flex items-center justify-center text-2xl font-semibold text-gray-500">
              No items in cart
            </h1>
          )}
        </div>
        <div className="mt-6 rounded-xl border border-gray-200 p-5">
          <h1 className="text-2xl font-bold">Delivery Infomation</h1>
          <DeliveryInformationForm
            value={value}
            setCartObject={setCartObject}
          />
        </div>
      </div>
      <div className="mt-5 md:ml-5 md:mt-0 md:w-1/3">
        <div className="md:sticky md:top-5">
          <div className="rounded-xl border border-gray-200 p-5">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <OrderSummaryForm
              checkCode={checkCode}
              codeRef={codeRef}
              setCode={setCode}
              radio={radio}
              setRadio={setRadio}
              code={code}
              codeLoading={codeLoading}
            />
            <div className="mt-3 divide-y">
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
                      <span className="text-sm text-gray-500">{code.name}</span>
                    </p>
                    <p className="font-semibold">-{code.price}zł</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between pt-2">
                <p className="font-extrabold">Total</p>
                <p className="font-extrabold">
                  {getSubtotal(cart) + deliveryPrice - (code ? code?.price : 0)}
                  zł
                </p>
              </div>
              <DemoDialog
                {...value}
                code={code ? code : null}
                paymentMethod={radio}
                cart={cart}
              >
                <Button disabled={disabled} className="mt-3 w-full py-3">
                  Pay{" "}
                  {getSubtotal(cart) + deliveryPrice - (code ? code?.price : 0)}
                  zł
                </Button>
              </DemoDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
