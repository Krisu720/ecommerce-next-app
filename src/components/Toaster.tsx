"use client";

import { FC } from "react";
import { CheckBadgeIcon, XMarkIcon} from "@heroicons/react/24/outline";
import { useAppSelector } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
interface ToasterProps {}

const Toaster: FC<ToasterProps> = ({}) => {
  const toast = useAppSelector((state) => state.toasterReducer.value);

  return (
    <AnimatePresence>
      {toast.message.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 800 }}
          className={`fixed bottom-5 right-5 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }  h-12 rounded-lg flex items-center justify-center`}
        >
          <span className="text-white flex gap-2 px-2">
            {toast.type === "success" ? (
              <CheckBadgeIcon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6" />
            )}
            {toast.message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toaster;
