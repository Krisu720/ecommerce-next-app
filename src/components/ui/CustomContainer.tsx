import { FC } from "react";

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CustomContainer: FC<CustomContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className={`mx-3 md:mx-6 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default CustomContainer;
