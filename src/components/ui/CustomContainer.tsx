import { FC, ReactNode } from "react";

interface CustomContainerProps {
    children: React.ReactNode,
    className?: string,
}

const CustomContainer: FC<CustomContainerProps> = ({className,children,...props}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className={`md:mx-6 mx-3 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default CustomContainer;
