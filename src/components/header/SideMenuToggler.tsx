import { FC } from "react";
import { Icon } from "@iconify/react";

const SideMenuToggler: FC = () => (
  <span
    className="flex justify-center items-center rounded-[35%] bg-[#282828] w-12 h-12 cursor-pointer 
  lg:hidden"
  >
    <Icon icon="ic:baseline-menu" className="text-[#fcfcfc]" height={24} />
  </span>
);

export default SideMenuToggler;
