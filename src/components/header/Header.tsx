import { FC } from "react";
import RiotLogo from "./RiotLogo";
import LocaleSwitcher from "./LocaleSwitcher";
import NavLinks from "./NavLinks";
import PlayNowButton from "./PlayNowButton";
import SideMenuToggler from "./SideMenuToggler";
import ValorantLogo from "./ValorantLogo";

const Header: FC = () => (
  <header className="flex fixed w-full top-0 left-0 h-20 items-center px-4 lg:px-9 bg-dark font-markpro z-50 border-b-2 border-gray-700/40">
    <RiotLogo />
    <ValorantLogo />
    <NavLinks />
    <div className="flex flex-row items-center ml-auto">
      <LocaleSwitcher />
      <PlayNowButton />
      <SideMenuToggler />
    </div>
  </header>
);

export default Header;
