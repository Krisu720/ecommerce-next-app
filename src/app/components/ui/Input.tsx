import { FC } from "react";

interface InputProps {
  label?: string;
  placeholer?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, placeholer, className }) => {
  if (label) {
    return (
      <div className=" w-full">
        <p className="font-bold my-2">{label}</p>
        <input
          placeholder={placeholer}
          type="text"
          className={`${className} outline outline-2 focus:outline-green-800 outline-gray-300 p-2 rounded w-full`}
        />
      </div>
    );
  } else
    return (
      <input
        placeholder={placeholer}
        type="text"
        className={`${className} outline outline-2 focus:outline-green-800 outline-gray-300 p-2 rounded  w-full`}
      />
    );
};

export default Input;
