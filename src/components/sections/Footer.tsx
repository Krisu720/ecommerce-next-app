import Link from "next/link";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className=" bg-gray-100 flex items-center justify-between px-12 gap-4 py-4 md:gap-12 flex-col md:flex-row mt-12">
    <Link className="flex items-center" href="/">
      <h1 className="text-2xl font-extrabold">SHOPY</h1>
    </Link>
    <div className="flex gap-4">
      <a
        className="hover:underline"
        href="https://github.com/Krisu720"
        target="_blank"
      >
        Author
      </a>
      <a
        className="hover:underline"
        href="https://github.com/Krisu720/ecommerce-next-app"
        target="_blank"
      >
        Github repo
      </a>
    </div>
  </div>
  );
};

export default Footer;
