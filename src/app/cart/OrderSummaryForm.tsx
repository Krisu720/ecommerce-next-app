import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Dispatch, FC, RefObject, SetStateAction, useRef } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Promocode } from "@prisma/client";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { Loader2 } from "lucide-react";

interface OrderSummaryFormProps {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  codeRef: RefObject<HTMLInputElement>;
  checkCode: () => Promise<void>;
  code: Promocode | null;
  setCode: Dispatch<SetStateAction<Promocode | null>>;
  codeLoading: boolean;
}

const OrderSummaryForm: FC<OrderSummaryFormProps> = ({
  value,
  setValue,
  checkCode,
  codeRef,
  code,
  setCode,
  codeLoading,
}) => {
  console.log("OrdersSummaryForm");

  return (
    <>
      <div className="flex my-3 items-center">
        <Input
          placeholer="code"
          className="mr-5 disabled:text-gray-500"
          type="text"
          ref={codeRef}
          disabled={code ? true : false}
        />
        <Button
          className="w-60 flex justify-center"
          onClick={code ? () => setCode(null) : () => checkCode()}
        >
          <span className="flex">
            {codeLoading && <Loader2 className="h-5 w-5 mr-2 animate-spin" />}
            {code ? "Remove code" : "Use code"}
          </span>
        </Button>
      </div>
      <form>
        <h2 className="text-lg font-bold">Payment Details</h2>
        <RadioGroup.Root
          className="flex flex-col gap-2 mt-3"
          onValueChange={(val) => setValue(val)}
          value={value}
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
        </RadioGroup.Root>
      </form>
    </>
  );
};

export default OrderSummaryForm;
