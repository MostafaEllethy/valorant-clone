import { FC } from "react";
import MapsImg from "./maps.webp";
import BirdsImg from "./birds.webp";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Background: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateBirdsX = useTransform(scrollYProgress, [0, 1.1], [500, -500]);
  const translateBirdsY = useTransform(scrollYProgress, [0, 1.1], [425, -425]);

  return (
    <>
      <div
        className="absolute h-[15rem] bg-[url('/src/assets/img/bg-sprite.webp')] w-8 bg-no-repeat z-10 
        bottom-[14%] lg:bottom-auto lg:top-[10%]
        left-[6vw] lg:left-[2vw]
        hidden md:block"
        style={{ backgroundPositionX: -35, backgroundPositionY: -103 }}
      ></div>

      <div
        className="absolute bottom-0 right-0 w-full bg-cover bg-no-repeat left-0 overflow-clip
        bg-[url('/src/components/section-maps/maps-bg.webp')] md:bg-none
        h-[32.5rem] lg:h-[62vw]
        lg:max-h-[55rem]"
        style={{ backgroundPositionX: "70%" }}
      >
        <motion.img
          style={{ translateX: translateBirdsX, translateY: translateBirdsY }}
          src={BirdsImg}
          alt="birds"
          className="absolute w-auto h-[30%]
        right-0 xl:right-[7.3vw] 
        bottom-[2.5%] xl:bottom-[15%]
        hidden md:block"
        />
        <img
          src={MapsImg}
          width={1260}
          height={880}
          alt="maps"
          className="relative float-right
            w-[46.5rem] lg:w-auto
            h-auto lg:h-full
            hidden md:block
            lg:right-[7vw] lg:translate-x-[22%]"
        />
      </div>
    </>
  );
};

export default Background;
