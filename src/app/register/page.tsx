import { FC } from "react";

import Link from "next/link";
import RegisterForm from "./RegisterForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center ">
        <div className="flex flex-col border border-gray-200 p-5 rounded-2xl md:min-w-[35rem] shadow">
          <h1 className="font-bold text-3xl my-4">Create your new account</h1>
          <RegisterForm />
          <h1>
            Have an account?{" "}
            <Link
              href="/login"
              className="hover:underline font-semibold text-green-800"
            >
              Log in!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
