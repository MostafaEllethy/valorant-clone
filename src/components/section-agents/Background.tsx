import { FC } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Background: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateBG = useTransform(scrollYProgress, [0.5, 0.9], [-150, 100]);
  return (
    <>
      <motion.div
        className="ease-out duration-150 absolute bg-[url('/src/components/section-agents/agents-bg-2.webp')] bottom-0 z-0
        h-[38.4rem] lg:h-[calc(100%-7.5rem)]
        w-[90%] lg:w-[85%]
        left-[5%] lg:left-[7.3%]
        hidden md:block"
        style={{ translateY: translateBG }}
      />
      <div
        className="absolute right-0 bg-no-repeat top-[10%] w-8 h-[32.5rem] bg-[url('/src/assets/img/bg-sprite.webp')]"
        style={{ backgroundPositionX: "-123px" }}
      ></div>
      <div
        className="absolute bg-no-repeat top-[30%] w-8 h-[33.75rem] bg-[url('/src/assets/img/bg-sprite.webp')]
        -left-[7px] lg:left-5
        scale-50 sm:scale-75 md:scale-100"
      ></div>
    </>
  );
};

export default Background;
