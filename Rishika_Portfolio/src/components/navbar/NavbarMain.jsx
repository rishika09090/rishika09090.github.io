import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
      <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBarMain