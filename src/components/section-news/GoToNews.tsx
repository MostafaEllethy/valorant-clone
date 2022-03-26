import { FC } from "react";

const GoToNews: FC = () => (
  <div
    className="group cursor-pointer flex items-center flex-row
    mt-[0.625rem] lg:mt-0
    mb-5 lg:mb-0"
  >
    <p className="font-dinw05Bold uppercase text-red text-base mr-4 -tracking-wide">
      GO TO NEWS PAGE
    </p>
    <span className="group-hover:translate-x-2.5 ease-out duration-300 w-6 h-6">
      {/* Animated Arrow */}
      <svg viewBox="0 0 25 15" className="w-full h-full">
        <path
          d="M16.2.5L19.9 4m4.6 3.5l-8.3 7"
          fill="none"
          stroke="#ff4655"
        ></path>
        <path
          fill="none"
          stroke="#ff4655"
          strokeMiterlimit={10}
          d="M16 7.5H0"
        ></path>
      </svg>
    </span>
  </div>
);

export default GoToNews;
