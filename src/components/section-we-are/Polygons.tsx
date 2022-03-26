import { FC } from "react";
import RedSquare from "./RedSquare";

const Polygons: FC = () => (
  <>
    {/* Top Border Line */}
    <div
      className="absolute w-full top-0 border-t-slate-700/40 border 
    lg:ml-[8.5%] lg:max-w-[92%]"
    ></div>

    <div
      className="h-[1.875rem] w-full absolute left-0
    -top-[10vw] lg:-top-20"
    >
      <RedSquare
        className="top-0 left-0 
        w-[5px] md:w-[10px]
        h-[5px] md:h-[10px]"
      />
      <RedSquare
        className="bottom-0 right-0
        w-[7px] md:w-[14px]
        h-[7px] md:h-[14px]"
      />
      <span></span>
    </div>

    <RedSquare
      className="left-[80%] top-4
    h-[7px] md:h-[14px]
    w-[7px] md:w-[14px]"
    />

    {/* Red Line */}
    <div
      className="bg-red absolute h-[3px] w-1/5 max-w-[6.25rem] left-[60%]
    -top-[10vw] lg:-top-20"
    ></div>
  </>
);

export default Polygons;
