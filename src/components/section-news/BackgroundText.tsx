import { FC } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const BackgroundText: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateText = useTransform(scrollYProgress, [0, 0.2], [-40, 40]);

  return (
    <div className="absolute right-0 left-0 h-full w-full overflow-hidden top-0 font-dinw05Bold">
      <motion.h2
        className="uppercase absolute whitespace-nowrap w-full duration-150 ease-out leading-[0.82]
        text-[32.5vw] md:text-[26vw] lg:text-[22.65vw]"
        style={{
          translateY: translateText,
          WebkitTextStroke: "1px #dbd8d2",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span
          className="block
    -ml-6 lg:-ml-5"
        >
          We are
        </span>
        <span
          className="block
    ml-44 lg:ml-64"
        >
          VALORANT
        </span>
      </motion.h2>
    </div>
  );
};

export default BackgroundText;
