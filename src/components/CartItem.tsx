import { FC } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { changeAmount, getSubtotal, removeFromCart } from "@/redux/cart-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReduxProduct } from "@/types/types";

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
    <div key={id} className="flex justify-between items-center gap-6 my-3">
      <div className="h-30 w-40">
        <img
          src={image}
          className=" bg-gray-200 rounded-xl md:h-full"
          alt="headphones"
        />
      </div>
      <div className="mr-auto">
        <h1 className="font-bold">{title}</h1>
        <h1 className="text-gray-500 text-sm">{description}</h1>
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
            className="bg-green-800 text-white rounded py-1 px-1 font-semibold"
          >
            <MinusSmallIcon className="h-4 w-4" />
          </button>

          <input
            readOnly
            type="number"
            value={amount}
            className="hide-numberinput w-12 outline-none font-semibold text-center"
          />
          <button
            onClick={() => dispatch(changeAmount({ type: "increase", uuid }))}
            className="bg-green-800 text-white rounded py-1 px-1 font-semibold"
          >
            <PlusSmallIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
