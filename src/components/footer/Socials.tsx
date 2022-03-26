import { FC } from "react";
import Discord from "./icons/Discord";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";

const socials = [
  <Twitter />,
  <Youtube />,
  <Instagram />,
  <Facebook />,
  <Discord />,
];

const Socials: FC = () => (
  <div className="py-[18px]">
    <ul className="flex flex-wrap flex-row items-center justify-center list-none">
      {socials.map((item) => (
        <li
          className="cursor-pointer m-[6px] rounded-xl bg-gray-400/20 flex items-center justify-center
    w-12 lg:w-8
    h-12 lg:h-8"
          key={item.type}
        >
          <span
            className="fill-white
        m-3 lg:m-0
        w-6 lg:w-4
        h-6 lg:h-4"
            style={{ fillRule: "evenodd" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Socials;
