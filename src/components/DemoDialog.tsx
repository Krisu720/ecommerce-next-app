"use client";

import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./ui/Button";
import { CartObject, ReduxProduct } from "@/types/types";
import { Order, Promocode } from "@prisma/client";
import { useSession } from "next-auth/react";
import { getSubtotal, removeAll } from "@/redux/cart-slice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

interface DemoDialogProps extends CartObject {
  code: Promocode | null;
  paymentMethod: string;
  children: React.ReactNode;
  cart: ReduxProduct[];
}

const DemoDialog: FC<DemoDialogProps> = ({
  firstName,
  lastName,
  address,
  cityTown,
  zipCode,
  mobileNumber,
  email,
  paymentMethod,
  code,
  children,
  cart,
}) => {

  const codeBlock = `{
    "firstName": "${firstName}",
    "lastName": "${lastName}"
    "address": "${address}"
    "cityTown": "${cityTown}"
    "zipCode": "${zipCode}"
    "mobileNumber": "${mobileNumber}"
    "email": "${email}"
    "paymentMethod": "${paymentMethod}"
    "code": "${code?.name}"
    "products": ${cart[0]}
 }`;

  const session: any = useSession();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();


  const sumbitSuccess = async () => {
    const subtotal = getSubtotal(cart);
    const deliveryPrice = 9;
    const total = code
      ? subtotal - code.price + deliveryPrice
      : subtotal + deliveryPrice;

    const order = {
      address,
      cityTown,
      code: code ? code.name : null,
      email,
      firstName,
      price: total,
      lastName,
      mobileNumber,
      paymentMethod,
      products: JSON.stringify(cart),
      userId: session.data?.user?.id,
      zipCode,
    };

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data:{id: string} = await res.json();
    if (res.ok) {
      router.push(`/success/${data.id}`);
      dispatch(removeAll());
    }
  };

  const submitDeny = async () => {
    router.push("/failed");
    dispatch(removeAll());
  };

  return (
    
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black/30" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-30 max-w-[30rem] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white p-5">
          <Dialog.Title className="text-3xl font-bold">Demo</Dialog.Title>
          <Dialog.Description className="text-gray-500">
            This is demo version of accepting payment in stipe. Click correct
            button which you want to resposne as a stripe callback.
          </Dialog.Description>
          <p className="mt-4">Object sent to stripe: </p>
          <pre className="rounded bg-black text-white">{codeBlock}</pre>
          <div className="mt-6 flex w-full gap-3">
            <Dialog.Close asChild className="w-1/2">
              <Button size="lg" onClick={() => sumbitSuccess()}>
                Success
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild className="w-1/2">
              <Button
                onClick={() => submitDeny()}
                size="lg"
                className="bg-red-300 text-red-800 hover:bg-red-800 hover:text-white"
              >
                Deny
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
        </Dialog.Portal>
      
  );
};

export default DemoDialog;
