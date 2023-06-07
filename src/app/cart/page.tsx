"use client";

import { FC } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface pageProps {}

const items = [1, 2, 3];

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <div className="border rounded-xl border-gray-200 p-5">
          <h1 className="font-bold text-2xl">Items</h1>
          {items.map((i) => (
            <div className="flex justify-between items-center gap-6 my-3">
              <img
                src="../headphones.png"
                className="h-40 w-40 bg-gray-200 rounded-xl"
                alt="headphones"
              />
              <div className="mr-auto">
                <h1 className="font-bold">Gaming Headphones</h1>
                <h1 className="text-gray-500 text-sm">
                  Stereo,noise cancelation headphones
                </h1>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-bold">400zł</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border rounded-xl border-gray-200 p-5 mt-6">
          <h1 className="font-bold text-2xl">Delivery Infomation</h1>
          <div className="flex gap-6">
            <Input placeholer="Type here..." label="First Name*" />
            <Input placeholer="Type here..." label="Last Name*" />
          </div>
          <Input placeholer="Type here..." label="Address*" />
          <div className="flex mt-2 gap-6">
            <Input placeholer="Type here..." label="City/Town*" />
            <Input placeholer="Type here..." label="Zip Code*" />
          </div>
          <div className="flex mt-2 gap-6">
            <Input placeholer="Type here..." label="Mobile Number*" />
            <Input placeholer="Type here..." label="Email*" />
          </div>
        </div>
      </div>
      <div className="w-1/3 ml-5">
        <div className="border rounded-xl border-gray-200 p-5">
          <h1 className="font-bold text-2xl">Order Summary</h1>
          <div className="flex my-3 items-center">
            <Input placeholer="code" className="mr-5" />
            <Button className="w-36">Use code</Button>
          </div>
          <h2 className="text-lg font-bold">Payment Details</h2>
          <RadioGroup.Root
            className="flex flex-col gap-2 mt-3"
            defaultValue="paypal"
          >
            <div className="flex items-center gap-2">
              <RadioGroup.Item
                value="paypal"
                id="r1"
                className="bg-white outline w-5 h-5 rounded-full shadow"
              >
                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full  relative after:content-[''] after:h-3 after:w-3 after:bg-green-800 after:rounded-full" />
              </RadioGroup.Item>
              <label htmlFor="r1">Paypal</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup.Item
                value="credit/debit"
                id="r2"
                className="bg-white outline w-5 h-5 rounded-full shadow"
              >
                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full  relative after:content-[''] after:h-3 after:w-3 after:bg-green-800 after:rounded-full" />
              </RadioGroup.Item>
              <label htmlFor="r2">Credit or Debit card</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroup.Item
                value="przelewy24"
                id="r3"
                className="bg-white outline w-5 h-5 rounded-full shadow"
              >
                <RadioGroup.Indicator className="flex justify-center items-center w-full h-full  relative after:content-[''] after:h-3 after:w-3 after:bg-green-800 after:rounded-full" />
              </RadioGroup.Item>
              <label htmlFor="r3" className="">
                Przelewy24
              </label>
            </div>
            <div className="divide-y mt-3">
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex justify-between">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-semibold">400zł</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Delivery</p>
                  <p className="font-semibold">0zł</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Discount Code</p>
                  <p className="font-semibold">-10zł</p>
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <p className="font-extrabold">Total</p>
                <p className="font-extrabold">390zł</p>
              </div>
              <Button className="w-full mt-3 py-3">Pay 390zł</Button>
            </div>
          </RadioGroup.Root>
        </div>
      </div>
    </div>
  );
};

export default page;
