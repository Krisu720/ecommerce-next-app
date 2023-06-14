import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { getOrder } from "@/lib/getOrderById";

const page = async ({
  params: { orderId },
}: {
  params: { orderId: string };
}) => {
  const order = await getOrder(orderId);
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full translate-y-[-50%] flex-col items-center rounded-3xl  bg-gray-200 md:max-w-[30rem]">
        <div className="mt-6 flex flex-col items-center gap-2">
          <Check className="h-12 w-12 rounded-full bg-green-600  p-2 text-green-200" />
          <h1 className="text-lg font-bold ">Payment Success!</h1>
        </div>
        <div className="flex w-full flex-col p-6">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500">Order Id:</p>
            <p className="font-semibold">#{order?.id}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500">Code:</p>
            <p className="font-semibold">{order?.code ? order.code : "not used"}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500">Payment Method:</p>
            <p className="font-semibold">{order?.paymentMethod}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500">Total Price:</p>
            <p className="font-semibold">{order?.price}zł</p>
          </div>
          <Button href="/products" size="lg" className="mt-4">
            Go back to products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
