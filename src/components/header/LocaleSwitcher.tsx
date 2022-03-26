import { FC } from "react";
import { Icon } from "@iconify/react";

const LocaleSwitcher: FC = () => (
  <span
    className="flex justify-center items-center rounded-lg cursor-pointer mr-2  
    w-12 lg:w-8
    h-12 lg:h-8
    hover:bg-[#282828]"
  >
    <Icon
      icon="ic:baseline-language"
      className="text-white text-3xl lg:text-xl"
    />
  </span>
);

export default LocaleSwitcher;
