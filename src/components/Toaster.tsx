"use client";

import { FC } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
interface ToasterProps {}

const Toaster: FC<ToasterProps> = ({}) => {
  const message = useAppSelector((state) => state.toasterReducer.value.message);

  return (
    <AnimatePresence>
      {message.length > 0 && (
        <motion.div 
        initial={{opacity:0,x:400}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:800}}
        
        className="fixed bottom-5 right-5 bg-green-600 w-56 h-12 rounded-lg flex items-center justify-center">
          <span className="text-white flex gap-2">
            <CheckBadgeIcon className="h-6 w-6" />
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toaster;
