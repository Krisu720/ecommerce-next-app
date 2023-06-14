"use client";

import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Session } from "next-auth";
import {
  ChevronDownIcon,
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
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="mx-3 flex gap-2 md:gap-8">
      {session ? (
        <DropdownMenu.Root
          open={open}
          onOpenChange={(opened) => setOpen(opened)}
        >
          <DropdownMenu.Trigger className="outline-none" asChild>
            <button className="flex items-center rounded-xl px-3 py-2 transition-colors hover:bg-gray-200">
              Account <ChevronDownIcon className="h-6 w-6" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="relative z-50" asChild>
              <motion.div
                className="mt-2 flex  flex-col items-center gap-1 rounded bg-white p-2 shadow"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <DropdownMenu.Item className="outline-none">
                  <Link
                    href="/account"
                    className="flex items-center gap-1 rounded p-2 hover:bg-gray-200"
                    onClick={() => setOpen(false)}
                  >
                    <Cog6ToothIcon className="h-6 w-6" />
                    Account settings
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="w-full outline-none">
                  <button
                    onClick={async () => {
                      await signOut({ redirect: false });
                      location.reload();
                    }}
                    className="flex w-full items-center gap-1 rounded p-2 hover:bg-gray-200"
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
          className="rounded-xl px-3 py-2 transition-colors hover:bg-gray-200"
          href="/login"
        >
          Log in
        </Link>
      )}
      <Link
        className="rounded-xl px-3 py-2 transition-colors hover:bg-gray-200"
        href="/cart"
      >
        <div className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          {amount > 0 && (
            <span className="absolute right-[-0.7rem] top-[-0.4rem] rounded-full bg-orange-400 px-2 text-xs font-semibold text-white">
              {amount}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default NavbarClientButtons;
