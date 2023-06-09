"use client";

import { FC,FormEvent,useRef } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { signIn } from "next-auth/react";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });
    }
  };

  return (
    <form onSubmit={(e)=>onSubmit(e)}>
      <Input label="Email" placeholer="Email" ref={emailRef} type="email"/>
      <Input label="Password" placeholer="Hasło" ref={passwordRef} type="password"/>
      <Button className="my-8 py-3" type="submit">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
