import { FC } from "react";
import Copyright from "./Copyright";

import Download from "./Download";
import Legals from "./Legals";
import Rating from "./Rating";
import Riot from "./Riot";
import Socials from "./Socials";

const Footer: FC = () => (
  <footer className="bg-[#111] pb-12">
    <Download />
    <Socials />
    <Riot />
    <Copyright />
    <Legals />
    <Rating />
  </footer>
);

export default Footer;
