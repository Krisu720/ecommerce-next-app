import Button from "@/app/components/ui/Button";
import CustomContainer from "@/app/components/ui/CustomContainer";
import { FC } from "react";

interface pageProps {}

const array = [1, 2, 3, 4];

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 p-12">
          <div className="bg-gray-100 rounded-xl">
            <img src="../headphones.png" alt="headphones" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
            {array.map((i) => (
              <div className="bg-gray-100 rounded-xl ">
                <img src="../headphones.png" alt="headphones" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-12 flex flex-col items-start gap-4">
          <h1 className="font-extrabold text-2xl">Gaming Headphones</h1>
          <span className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel, assumenda, rem necessitatibus voluptatibus et iste placeat
            maiores numquam maxime optio reprehenderit quod labore aliquid
            dignissimos tenetur ex porro nulla.
          </span>
          <p className="text-2xl font-bold">400zł</p>

          <div className="flex gap-12 w-full items-center">
            <div className="bg-gray-200 rounded-full flex justify-between items-center gap-5">
              <button className="hover:bg-gray-300 rounded-l-full py-2 px-5 font-bold text-xl">
                -
              </button>
              <span className="">1</span>
              <button className="hover:bg-gray-300 rounded-r-full py-2 px-5 font-bold text-xl">
                +
              </button>
            </div>
            <span className="text-green-800 font-semibold">Available</span>
          </div>

          <Button className="my-4">Add to Card</Button>
          <div className="class border boder-gray-500 rounded-xl divide-y">
            <div className="p-5">
              <h1 className="font-bold">Free Delivery</h1>
              <p className="text-gray-500 text-sm">
                In current month every single order has free delivery.
              </p>
            </div>
            <div className="p-5">
              <h1 className="font-bold">Return Delivery</h1>
              <p className="text-gray-500 text-sm">
                Free 30days Delivery Returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
