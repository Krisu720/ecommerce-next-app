"use client";

import Input from "@/components/ui/Input";
import { FC, RefObject, useRef } from "react";

interface DeliveryInformationFormProps {
  firstnameRef: RefObject<HTMLInputElement>;
  lastnameRef: RefObject<HTMLInputElement>;
  citytownRef: RefObject<HTMLInputElement>;
  zipcodeRef: RefObject<HTMLInputElement>;
  mobilenumberRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  addressRef: RefObject<HTMLInputElement>;
}

const DeliveryInformationForm: FC<DeliveryInformationFormProps> = ({
  firstnameRef,
  lastnameRef,
  citytownRef,
  zipcodeRef,
  addressRef,
  mobilenumberRef,
  emailRef,
}) => {
  console.log("DeliveryInformationForm");
  return (
    <>
      <div className="flex gap-6">
        <Input
          placeholer="Type here..."
          label="First Name*"
          type="text"
          ref={firstnameRef}
        />
        <Input
          placeholer="Type here..."
          label="Last Name*"
          type="text"
          ref={lastnameRef}
        />
      </div>
      <Input placeholer="Type here..." label="Address*" ref={addressRef} />
      <div className="flex mt-2 gap-6">
        <Input
          placeholer="Type here..."
          label="City/Town*"
          type="text"
          ref={citytownRef}
        />
        <Input
          placeholer="Type here..."
          label="Zip Code*"
          type="text"
          ref={zipcodeRef}
        />
      </div>
      <div className="flex mt-2 gap-6">
        <Input
          placeholer="Type here..."
          label="Mobile Number*"
          type="text"
          ref={mobilenumberRef}
        />
        <Input
          placeholer="Type here..."
          label="Email*"
          type="email"
          ref={emailRef}
        />
      </div>
    </>
  );
};

export default DeliveryInformationForm;
