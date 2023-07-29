"use client";

import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface MoblieNavbarProps {
  navs: {
    id: number;
    route: string;
    name: string;
  }[];
}

const MoblieNavbar: FC<MoblieNavbarProps> = ({ navs }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <button
        className="block md:hidden"
        onClick={() => setShow((prev) => !prev)}
      >
        <Bars3BottomRightIcon className="h-8 w-8" />
      </button>
      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween" }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed right-0 top-0 z-50 h-screen min-w-[20rem] bg-white shadow-2xl"
          >
            <div className="relative h-full">
              <button
                className="absolute right-3 top-5 z-10"
                onClick={() => setShow((prev) => !prev)}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <div className="flex h-full flex-col justify-center gap-6 px-12 text-3xl">
                {navs.map((i) => (
                  <Link
                    key={i.id}
                    className="w-full rounded px-2 py-2 hover:bg-gray-200"
                    href={i.route}
                    onClick={() => setShow((prev) => !prev)}
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MoblieNavbar;
