import { FC } from "react";
import Link from "next/link";
import LoginForm from "../../components/forms/LoginForm";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex justify-center ">
        <div className="flex flex-col rounded-2xl border border-gray-200 p-5 shadow md:min-w-[35rem]">
          <h1 className="my-4 text-3xl font-bold">Login to your account</h1>
          <LoginForm />
          <h1>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-green-800 hover:underline"
            >
              Sign in!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
