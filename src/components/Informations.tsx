import { FC } from "react";
import {
  ArchiveBoxIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

const Informations: FC = ({}) => {
  return (
    <div className="class boder-gray-500 divide-y rounded-xl border">
      <div className="flex gap-2 p-5">
        <ArchiveBoxIcon className="h-8 w-8 text-orange-400" />
        <div>
          <h1 className="font-bold">Free Delivery</h1>
          <p className="text-sm text-gray-500">
            In current month every single order has free delivery.
          </p>
        </div>
      </div>
      <div className="flex gap-2 p-5">
        <ArrowUturnLeftIcon className="h-8 w-8 text-orange-400" />
        <div>
          <h1 className="font-bold">Return Delivery</h1>
          <p className="text-sm text-gray-500">Free 30days Delivery Returns.</p>
        </div>
      </div>
    </div>
  );
};

export default Informations;
