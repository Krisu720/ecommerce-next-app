import { forwardRef, FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholer?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, placeholer, ...props }, ref) => {
    if (label) {
      return (
        <div className=" w-full">
          <p className="font-bold my-2">{label}</p>
          <input
            {...props}
            ref={ref}
            placeholder={placeholer}
            className={`${className} outline outline-2 focus:outline-green-800 outline-gray-300 p-2 rounded w-full`}
          />
        </div>
      );
    } else
      return (
        <input
          {...props}
          ref={ref}
          placeholder={placeholer}
          className={`${className} outline outline-2 focus:outline-green-800 outline-gray-300 p-2 rounded  w-full`}
        />
      );
  }
);

export default Input;
