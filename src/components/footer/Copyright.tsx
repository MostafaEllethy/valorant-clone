import { FC } from "react";

const Copyright: FC = () => (
  <div
    className="mx-auto
    max-w-[368px] md:max-w-[640px]"
  >
    <p
      className="font-ffmark text-center leading-[140%] text-[#7e7e7e] text-[13px] font-normal select-none"
      style={{ wordBreak: "keep-all" }}
    >
      © 2022 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are
      trademarks, service marks, and/or registered trademarks of Riot Games,
      Inc.
    </p>
  </div>
);

export default Copyright;
