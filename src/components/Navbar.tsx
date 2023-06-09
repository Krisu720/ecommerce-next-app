import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import NavbarClientButtons from "./NavbarClientButtons";
import MoblieNavbar from "./MoblieNavbar";

const navs = [
  { name: "Products",route: "products" , id: 1 },
  { name: "Sale",route: "sale" , id: 2 },
  { name: "Contact",route: "contact" , id: 3 },
];

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between py-4 items-center">
      <div className="flex gap-12">
        <Link href={'/'} className="font-extrabold text-3xl">SHOPY</Link>
        <div className="hidden md:flex gap-9 items-center">
          {navs.map((i) => (
            <Link
              key={i.id}
              className="px-3 py-2 rounded-xl hover:bg-gray-200 transition-colors"
              href={i.route}
            >
              {i.name}
            </Link>
          ))}
        </div>
      </div>
      <NavbarClientButtons session={session} />
      <MoblieNavbar navs={navs}/>
    </div>
  );
};

export default Navbar;
