import { cn } from "@/lib/utils";
import { cva , type VariantProps} from "class-variance-authority";
import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const buttonVariants = cva(
  "font-semibold duration-75  transition-all active:scale-95",
  {
    variants: {
      variant: {
        default: "text-green-800 hover:bg-green-800 hover:text-white text-sm outline outline-2",
      },
      size: {
        default: "px-3 py-1 rounded-full",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;