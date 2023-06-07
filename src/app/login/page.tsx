import { FC } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Link from "next/link";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center ">
        <div className="flex flex-col border border-gray-200 p-5 rounded-2xl min-w-[35rem] shadow">
          <h1 className="font-bold text-3xl my-4">Login to your account</h1>
          <Input label="Email" placeholer="Email" />
          <Input label="Password" placeholer="Hasło" />
          <Button className="my-8 py-3">Log in</Button>
          <h1>Don't have an account? <Link href='/register' className="hover:underline font-semibold text-green-800">Sign in!</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default page;
