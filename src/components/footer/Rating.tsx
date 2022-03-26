import { FC } from "react";
import esrb from "./na-esrb.webp";

const Rating: FC = () => (
  <div className="flex items-center justify-center">
    <div className="py-2 px-3 bg-[#292929] rounded-lg">
      <div className="flex flex-nowrap items-center justify-center">
        <img
          src={esrb}
          alt="rating"
          className="cursor-pointer my-1"
          width={65}
          height={97}
        />
        <div className="ml-3 inline-block text-left text-white text-[13px] font-semibold font-markpro leading-[150%]">
          Blood
          <br />
          Language
          <br />
          Violence
          <br />
          Users Interact
          <br />
          In-Game Purchases
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default Rating;
