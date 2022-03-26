import { FC } from "react";
import RiotLogo from "../RiotLogo";

const Riot: FC = () => (
  <div className="flex items-baseline justify-center py-6 px-5 select-none">
    <span className="fill-[#737373] w-[99px] h-8 hover:fill-white">
      <RiotLogo />
    </span>
  </div>
);

export default Riot;
