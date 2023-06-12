"use client";

import { FC, useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { redirect } from "next/navigation";
import useToaster from "../login/useToaster";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const toast = useToaster();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const repeatPassword = repeatPasswordRef.current?.value;

    if (email && password && repeatPassword && password === repeatPassword) {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        redirect("/login");
      } else {
        toast({ message: "That email can't be used", type: "danger" });
      }
    } else {
      toast({ message: "Passwords are not matching", type: "danger" });
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input label="Email" placeholer="Email" ref={emailRef} type="email" />
      <Input
        label="Password"
        placeholer="Password"
        ref={passwordRef}
        type="password"
      />
      <Input
        label="Repeat Password"
        placeholer="Repeat Password"
        ref={repeatPasswordRef}
        type="password"
      />
      <Button className="my-8 py-3" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
