import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string
}

const Button: FC<ButtonProps> = ({ children, className,href }) => {
  if(href) {
    return <Link
    href={href}
    className={`${className} font-semibold duration-75 text-sm outline outline-2 rounded-full px-3 py-1 text-green-800 hover:text-white hover:bg-green-800 transition-all active:scale-95`}
  >
    {children}
  </Link>
  } else
  return (
    <button
      className={`${className} font-semibold duration-75 text-sm outline outline-2 rounded-full px-3 py-1 text-green-800 hover:text-white hover:bg-green-800 transition-all active:scale-95`}
    >
      {children}
    </button>
  );
};

export default Button;
