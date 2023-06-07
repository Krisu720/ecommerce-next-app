"use client";

import Link from "next/link";
import { FC } from "react";
const navs = ["products", "Delivery", "Vouncher", "Categories"];

const Navbar: FC = ({}) => {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="flex gap-12">
        <span className="font-extrabold text-3xl">SHOPY</span>
        <div className="flex gap-9 items-center">
          {navs.map((i) => (
            <Link href={i}>{i}</Link>
          ))}
        </div>
      </div>
      <div className="flex gap-8 mx-3">
        <span>Account</span>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
