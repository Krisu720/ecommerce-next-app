"use client";

import { FC, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Session } from "next-auth";
import {
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "@/redux/store";
import { getAmountOfItems } from "@/redux/cart-slice";
import { motion } from "framer-motion";
interface NavbarClientButtonsProps {
  session: Session | null;
}

const NavbarClientButtons: FC<NavbarClientButtonsProps> = ({ session }) => {
  const products = useAppSelector((state) => state.cartReducer.value.products);
  const amount = getAmountOfItems(products);
  return (
    <div className="flex gap-2 md:gap-8 mx-3">
      {session ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="outline-none" asChild>
            <button className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-200 transition-colors">
              Account <ChevronDownIcon className="h-6 w-6" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal className="z-10">
            <DropdownMenu.Content>
              <motion.div
                className="mt-2 shadow  bg-white rounded p-2 flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <DropdownMenu.Item className="outline-none">
                  <Link
                    href="/account"
                    className="flex items-center gap-1 hover:bg-gray-200 p-2 rounded"
                  >
                    <Cog6ToothIcon className="h-6 w-6" />
                    Account settings
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="outline-none w-full">
                  <button
                    onClick={() => signOut({redirect:true,callbackUrl:"/"})}
                    className="flex w-full items-center gap-1 hover:bg-gray-200 p-2 rounded"
                  >
                    <ArrowRightOnRectangleIcon className="h-6 w-6" />
                    Log out
                  </button>
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
        <Link
          className="px-3 py-2 rounded-xl hover:bg-gray-200 transition-colors"
          href="/login"
        >
          Log in
        </Link>
      )}
      <Link
        className="px-3 py-2 rounded-xl hover:bg-gray-200 transition-colors"
        href="/cart"
      >
        <div className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          {amount > 0 && (
            <span className="absolute top-[-0.4rem] right-[-0.7rem] bg-orange-400 rounded-full text-xs px-2 text-white font-semibold">
              {amount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NavbarClientButtons;
