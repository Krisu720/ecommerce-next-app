import { getServerSession } from "next-auth";
import { FC } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col mt-12">
      <h1 className="text-xl text-gray-500 uppercase font-semibold">Account</h1>
      <h1 className="text-3xl font-extrabold">{session?.user?.email}</h1>
      <h1 className="text-2xl  font-semibold">Orders:</h1>
      <div className="bg-gray-200 p-3 rounded w-full md:w-1/2 shadow-lg">
        <h1 className="text-lg font-semibold">Order #41256126</h1>
        <h2 className="text-gray-500">23.05.2023 17:45</h2>
        <div className="flex my-2">
          <img src="https://placehold.co/75" alt="ss" />
          <div className="flex items-center justify-around w-full">
            <p>Myszka Logitech</p>
            <p>x3</p>
            <p>420zł</p>
          </div>
        </div>
        <div className="flex my-2">
          <img src="https://placehold.co/75" alt="ss" />
          <div className="flex items-center justify-around w-full">
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
