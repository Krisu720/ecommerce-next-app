import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Highlight } from "prism-react-renderer";

import Button from "./ui/Button";
import { Promocode } from "@prisma/client";
interface DemoDialogProps {
  firstName: string | undefined;
  lastName: string | undefined;
  address: string | undefined;
  cityTown: string | undefined;
  zipCode: string | undefined;
  mobileNumber: string | undefined;
  email: string | undefined;
  paymentMethod: string;
  code: Promocode | null;
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
    "code": "${code}"
 }`;
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/30 w-full h-full fixed inset-0" />
      <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[30rem] bg-white rounded-3xl z-30 p-5">
        <Dialog.Title className="text-3xl font-bold">Demo</Dialog.Title>
        <Dialog.Description className="text-gray-500">
          This is demo version of accepting payment in stipe. Click correct
          button which you want to innitiate stripe payment callback.
        </Dialog.Description>
        <p className="mt-4">Object sent to stripe: </p>
        <pre className="bg-black rounded text-white">{codeBlock}</pre>
        <div className="flex gap-3 w-full mt-6">
          <Dialog.Close asChild className="w-1/2">
            <Button>Success</Button>
          </Dialog.Close>
          <Dialog.Close asChild className="w-1/2">
            <Button>Deny</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default DemoDialog;
