import { FC } from "react";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

const page: FC = ({}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex justify-center ">
        <div className="flex flex-col rounded-2xl border border-gray-200 p-5 shadow md:min-w-[35rem]">
          <h1 className="my-4 text-3xl font-bold">Create your new account</h1>
          <RegisterForm />
          <h1>
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-green-800 hover:underline"
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
