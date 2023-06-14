"use client";

import Input from "@/components/ui/Input";
import { CartObject } from "@/types/types";
import { FC } from "react";

interface DeliveryInformationFormProps {
  value: CartObject;
  setCartObject: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DeliveryInformationForm: FC<DeliveryInformationFormProps> = ({
  value,
  setCartObject,
}) => {
  return (
    <>
      <div className="flex gap-6">
        <Input
          value={value.firstName}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="First Name*"
          type="text"
          name="firstName"
        />
        <Input
          value={value.lastName}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="Last Name*"
          type="text"
          name="lastName"
        />
      </div>
      <Input
        value={value.address}
        onChange={(e) => setCartObject(e)}
        placeholer="Type here..."
        label="Address*"
        type="text"
        name="address"
      />
      <div className="mt-2 flex gap-6">
        <Input
          value={value.cityTown}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="City/Town*"
          type="text"
          name="cityTown"
        />
        <Input
          value={value.zipCode}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="Zip Code*"
          type="text"
          name="zipCode"
        />
      </div>
      <div className="mt-2 flex gap-6">
        <Input
          value={value.mobileNumber}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="Mobile Number*"
          type="text"
          name="mobileNumber"
        />
        <Input
          value={value.email}
          onChange={(e) => setCartObject(e)}
          placeholer="Type here..."
          label="Email*"
          type="email"
          name="email"
        />
      </div>
    </>
  );
};

export default DeliveryInformationForm;
