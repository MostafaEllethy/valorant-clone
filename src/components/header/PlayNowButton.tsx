import { FC } from "react";

const PlayNowButton: FC = () => (
  <button
    className="rounded-xl font-semibold text-[13px] px-4 py-2 leading-4 tracking-wider
    hidden lg:block"
    style={{
      background:
        "linear-gradient(135deg, rgb(255, 51, 66) 0%, rgb(255, 48, 64) 0.01%, rgb(255, 125, 102) 100%)",
    }}
  >
    PLAY NOW
  </button>
);

export default PlayNowButton;
