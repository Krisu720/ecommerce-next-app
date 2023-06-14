import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Dispatch, FC, RefObject, SetStateAction } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Promocode } from "@prisma/client";
import { Loader2 } from "lucide-react";

interface OrderSummaryFormProps {
  radio: string;
  setRadio: React.Dispatch<SetStateAction<string>>;
  codeRef: RefObject<HTMLInputElement>;
  checkCode: () => Promise<void>;
  code: Promocode | null;
  setCode: Dispatch<SetStateAction<Promocode | null>>;
  codeLoading: boolean;
}

interface method {
  key: number;
  title: string;
  id: string;
  value: string;
}

const methods: method[] = [
  {
    id: "r1",
    key: 1,
    title: "PayPal",
    value: "paypal",
  },
  {
    id: "r2",
    key: 2,
    title: "Credit or Debit card",
    value: "cedit/debit",
  },
  {
    id: "r3",
    key: 3,
    title: "Przelewy24",
    value: "przelewy24",
  },
];

const OrderSummaryForm: FC<OrderSummaryFormProps> = ({
  checkCode,
  codeRef,
  code,
  radio,
  setRadio,
  setCode,
  codeLoading,
}) => {
  return (
    <>
      <div className="my-3 flex items-center">
        <Input
          placeholer="code"
          className="mr-5 disabled:text-gray-500"
          type="text"
          ref={codeRef}
          disabled={code ? true : false}
        />
        <Button
          className="flex w-60 justify-center"
          onClick={code ? () => setCode(null) : () => checkCode()}
        >
          <span className="flex">
            {codeLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
            {code ? "Remove code" : "Use code"}
          </span>
        </Button>
      </div>
      <form>
        <h2 className="text-lg font-bold">Payment Details</h2>
        <RadioGroup.Root
          className="mt-3 flex flex-col gap-2"
          name="paymentMethod"
          value={radio}
          onValueChange={(val) => setRadio(val)}
        >
          {methods.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <RadioGroup.Item
                value={item.value}
                id={item.id}
                className="h-5 w-5 rounded-full bg-white shadow outline"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center  justify-center after:h-3 after:w-3 after:rounded-full after:bg-green-800 after:content-['']" />
              </RadioGroup.Item>
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </RadioGroup.Root>
      </form>
    </>
  );
};

export default OrderSummaryForm;
