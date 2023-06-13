import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./ui/Button";
import { CartObject } from "@/types/types";
interface DemoDialogProps extends CartObject {
  code: string | null;
  paymentMethod: string;
  children: React.ReactNode;
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
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black/30" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-30 max-w-[30rem] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-white p-5">
          <Dialog.Title className="text-3xl font-bold">Demo</Dialog.Title>
          <Dialog.Description className="text-gray-500">
            This is demo version of accepting payment in stipe. Click correct
            button which you want to innitiate stripe payment callback.
          </Dialog.Description>
          <p className="mt-4">Object sent to stripe: </p>
          <pre className="rounded bg-black text-white">{codeBlock}</pre>
          <div className="mt-6 flex w-full gap-3">
            <Dialog.Close asChild className="w-1/2">
              <Button size="lg">Success</Button>
            </Dialog.Close>
            <Dialog.Close asChild className="w-1/2">
              <Button
                size="lg"
                className="bg-red-300 text-red-800 hover:bg-red-800 hover:text-white"
              >
                Deny
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DemoDialog;
