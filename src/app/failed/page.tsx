import Button from "@/components/ui/Button";
import { X } from "lucide-react";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full translate-y-[-50%] flex-col items-center rounded-3xl  bg-gray-200 md:max-w-[30rem]">
        <div className="mt-6 flex flex-col items-center gap-2">
          <X className="h-12 w-12 rounded-full bg-red-600  p-2 text-red-200" />
          <h1 className="text-lg font-bold ">Payment Denied!</h1>
        </div>
        <div className="flex w-full flex-col p-6">
          <Button href="/products" size="lg" className="mt-4">
            Go back to products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
