import { getServerSession } from "next-auth";
import { FC } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getOrders } from "@/lib/getOrders";
import { ReduxProduct } from "@/types/types";

const Page: FC = async ({}) => {
  const session: any = await getServerSession(authOptions);
  const orders = await getOrders(session?.user?.id);
  return (
    <div className="min-h-screen">
      <div className="mt-12 flex flex-col ">
        <h1 className="text-xl font-semibold uppercase text-gray-500">
          Account
        </h1>
        <h1 className="text-xl font-extrabold md:text-3xl">
          {session?.user?.email}
        </h1>
        <h1 className="mt-6  text-2xl font-semibold">Orders:</h1>
        {orders.length > 0 ? (
          orders.map((i, index) => (
            <div
              key={index}
              className="w-full rounded bg-gray-200 p-3 shadow-lg md:w-2/3 my-2"
            >
              <h1 className="text-lg font-semibold">Order #{i.id}</h1>
              <h2 className="text-sm text-gray-500 md:text-base">
                {i.firstName},{i.lastName}
              </h2>
              <h2 className="text-sm text-gray-500 md:text-base">
                {i.cityTown},{i.address},{i.zipCode}
              </h2>
              <h2 className="text-sm text-gray-500 md:text-base">
                {i.mobileNumber},{i.email}
              </h2>
              <h2 className="text-lg font-semibold">total: {i.price}zł</h2>
              {Array<ReduxProduct>(...JSON.parse(i.products)).map((i,index) => (
                <div key={index} className="my-2 flex">
                  <img src={i.image[0]} alt={i.title} className="h-16 w-16" />
                  <div className="flex w-full items-center justify-around">
                    <p className="text-sm md:text-base">{i.title}</p>
                    <p className="text-sm md:text-base">x{i.amount}</p>
                    <p className="text-sm md:text-base">{i.price}zł</p>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <h1 className="mt-6 text-lg font-semibold text-gray-500">
            Zero active orders
          </h1>
        )}
      </div>
    </div>
  );
};

export default Page;
