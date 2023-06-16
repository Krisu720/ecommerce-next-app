import { forwardRef } from "react";

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
          <p className="my-2 font-bold">{label}</p>
          <input
            {...props}
            ref={ref}
            placeholder={placeholer}
            className={`${className} w-full rounded p-2 outline outline-2 outline-gray-300 focus:outline-green-800`}
          />
        </div>
      );
    } else
      return (
        <input
          {...props}
          ref={ref}
          placeholder={placeholer}
          className={`${className} w-full rounded p-2 outline outline-2 outline-gray-300  focus:outline-green-800`}
        />
      );
  }
);

Input.displayName = "CustomInput";

export default Input;
