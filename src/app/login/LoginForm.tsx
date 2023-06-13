"use client";

import { FC, FormEvent, useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import useToaster from "@/app/login/useToaster";
import { useSearchParams } from "next/navigation";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToaster();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
 

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      setLoading(true);
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: true,
      });
      setLoading(false);
    } else {
      toast({ message: "Wrong credentials", type: "danger" });
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input label="Email" placeholer="Email" ref={emailRef} type="email" />
      <Input
        label="Password"
        placeholer="Hasło"
        ref={passwordRef}
        type="password"
      />
      {error && <div className="p-5 bg-red-500 rounded-lg mt-6 text-white"><span>Wrong Credentials</span></div>}
      <Button className="my-8 flex gap-2" type="submit">
        {loading && <Loader2 className="h-5 w-5 mr-2 animate-spin" />}
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
