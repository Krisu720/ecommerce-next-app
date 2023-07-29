import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NavbarClientButtons from "../NavbarClientButtons";
import MoblieNavbar from "./MoblieNavbar";

const navs = [
  { name: "Products", route: "products", id: 1 },
  { name: "Contact", route: "contact", id: 3 },
];

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" left-0 top-0 flex w-full items-center justify-between py-4">
      <div className="flex gap-12">
        <Link href={"/"} className="text-3xl font-extrabold">
          SHOPY
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navs.map((i) => (
            <Link
              key={i.id}
              className="rounded-xl px-3 py-2 transition-colors hover:bg-gray-200"
              href={i.route}
            >
              {i.name}
            </Link>
          ))}
        </div>
      </div>
      <NavbarClientButtons session={session} />
      <MoblieNavbar navs={navs} />
    </div>
  );
};

export default Navbar;
