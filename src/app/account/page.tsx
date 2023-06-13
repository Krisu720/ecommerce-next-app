import { getServerSession } from "next-auth";
import { FC } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page: FC = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-12 flex flex-col">
      <h1 className="text-xl font-semibold uppercase text-gray-500">Account</h1>
      <h1 className="text-xl font-extrabold md:text-3xl">
        {session?.user?.email}
      </h1>
      <h1 className="mt-6  text-2xl font-semibold">Orders:</h1>
      <div className="w-full rounded bg-gray-200 p-3 shadow-lg md:w-1/2">
        <h1 className="text-lg font-semibold">Order #41256126</h1>
        <h2 className="text-gray-500">23.05.2023 17:45</h2>
        <div className="my-2 flex">
          <img src="https://placehold.co/75" alt="ss" />
          <div className="flex w-full items-center justify-around">
            <p>Myszka Logitech</p>
            <p>x3</p>
            <p>420zł</p>
          </div>
        </div>
        <div className="my-2 flex">
          <img src="https://placehold.co/75" alt="ss" />
          <div className="flex w-full items-center justify-around">
            <p>Myszka Logitech</p>
            <p>x3</p>
            <p>420zł</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
