import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import { navLinks } from "@/constants";

export const Navbar = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          <MenuIcon className="w-5 h-5 md:hidden" />

          {/* Desktop menu */}
          <nav className="hidden md:flex text-black/60 gap-6 items-center">
            {navLinks.map(({ id, link, title, isButton }) =>
              isButton ? (
                <button key={id} className="btn btn-primary">
                  {title}
                </button>
              ) : (
                <a key={id} href={link}>
                  {title}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
