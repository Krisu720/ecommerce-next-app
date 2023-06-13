"use client";

import { FC, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
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
      <button className="block md:hidden" onClick={() => setShow((prev) => !prev)}>
        <Bars3BottomRightIcon className="h-8 w-8" />
      </button>
      <AnimatePresence initial={false}>
        {show && (
          <motion.div 
          initial={{opacity:0,x:400}}
          animate={{opacity:1,x:0}}
          transition={{type: "tween"}}
          exit={{opacity:0,x:400}}
          className="fixed top-0 right-0 h-screen bg-white min-w-[20rem] shadow-2xl z-50">
            <div className="relative h-full">
              <button
                className="right-3 top-5 absolute z-10"
                onClick={() => setShow((prev) => !prev)}
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
              <div className="h-full flex flex-col gap-6 text-3xl justify-center px-12">
                {navs.map((i) => (
                  <Link
                  key={i.id}
                  className="w-full hover:bg-gray-200 px-2 py-2 rounded"
                  href={i.route}
                  onClick={()=>setShow(prev=>!prev)}
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
