"use client";

import { FC, FormEvent, useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import useToaster from "@/lib/useToaster";
import { useSearchParams } from "next/navigation";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const toast = useToaster();

  //search for error params
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/"
      });
      if (result?.error) {
        toast({message: result.error,type: "danger"});
      } else {
        
      }
      setLoading(false);
    } else {
      toast({ message: "Wrong credentials", type: "danger" });
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="w-full">
      <Input label="Email" placeholer="Email" ref={emailRef} type="email" />
      <Input
        label="Password"
        placeholer="Hasło"
        ref={passwordRef}
        type="password"
      />
      {error && (
        <div className="mt-6 rounded-lg bg-red-500 p-5 text-white">
          <span>Wrong Credentials</span>
        </div>
      )}
      <Button size="lg" className="my-4 flex items-center gap-2" type="submit">
        {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
