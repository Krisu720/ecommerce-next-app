"use client";

import { FC, useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const repeatPassword = repeatPasswordRef.current?.value;

    if (email && password && repeatPassword && password === repeatPassword) {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });

        if (res.ok) console.log(res);
      } catch (err: any) {
        setError(err?.message);
      }
    } else {
      setError("Passwords are not matching.");
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input label="Email" placeholer="Email" ref={emailRef} type="email"/>
      <Input label="Password" placeholer="Password" ref={passwordRef} type="password"/>
      <Input
        label="Repeat Password"
        placeholer="Repeat Password"
        ref={repeatPasswordRef}
        type="password"
      />
      {error && (
        <div className="bg-red-700 py-3 px-6 rounded-lg mt-6">
          <p className="text-white">{error}</p>
        </div>
      )}
      <Button className="my-8 py-3" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
