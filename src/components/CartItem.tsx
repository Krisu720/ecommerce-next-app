import { FC } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { changeAmount, getSubtotal, removeFromCart } from "@/redux/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReduxProduct } from "@/types/types";
import { Trash2 } from "lucide-react";

interface CartItemProps extends ReduxProduct {}

const CartItem: FC<CartItemProps> = ({
  id,
  image,
  title,
  description,
  amount,
  price,
  uuid,
}) => {
  
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div key={id} className="my-3 flex items-center justify-between gap-6">
      <div className="h-30 w-40">
        <img
          src={image[0]}
          className=" rounded-xl bg-gray-200 md:h-full"
          alt="headphones"
        />
      </div>
      <div className="mr-auto">
        <h1 className="font-bold">{title}</h1>
        <h1 className="text-sm text-gray-500">{description}</h1>
      </div>

      <div className="flex flex-col items-end">
        <p className="font-bold">{amount * price}zł</p>
        <div className="flex">
          <button
            onClick={
              amount > 1
                ? () => dispatch(changeAmount({ type: "decrease", uuid }))
                : () => dispatch(removeFromCart({ uuid }))
            }
            className="rounded bg-green-800 px-1 py-1 font-semibold text-white"
          >
            <MinusSmallIcon className="h-4 w-4" />
          </button>

          <input
            readOnly
            type="number"
            value={amount}
            className="hide-numberinput w-12 text-center font-semibold outline-none"
          />
          <button
            onClick={() => dispatch(changeAmount({ type: "increase", uuid }))}
            className="rounded bg-green-800 px-1 py-1 font-semibold text-white"
          >
            <PlusSmallIcon className="h-4 w-4" />
          </button>
        </div>
        <button
          className="my-2 flex w-full justify-center rounded bg-red-500 p-1 text-white transition-colors hover:bg-red-300"
          onClick={() => dispatch(removeFromCart({ uuid }))}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
