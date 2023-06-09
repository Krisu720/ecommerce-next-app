import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { FC, useRef } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface OrderSummaryFormProps {}

const OrderSummaryForm: FC<OrderSummaryFormProps> = ({}) => {
  
  const codeRef= useRef<HTMLInputElement>(null)

  const checkCode = async ():Promise<void> => {
    if(codeRef.current?.value) {
      const res = await fetch(`/api/promocode/${codeRef.current.value}`)
      console.log(res)
      
    }
  }
  
  return (
    <>
      <div className="flex my-3 items-center">
        <Input placeholer="code" className="mr-5" type="text" ref={codeRef}/>
        <Button className="w-36" onClick={()=>checkCode()}>Use code</Button>
      </div>
      <form>
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
        </RadioGroup.Root>
      </form>
    </>
  );
};

export default OrderSummaryForm;
