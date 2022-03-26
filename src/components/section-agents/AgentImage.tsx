import { FC } from "react";
import AgentImg from "./agent.webp";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const AgentImage: FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const translateAgent = useTransform(scrollYProgress, [0.4, 0.9], [100, -300]);
  const img = <img src={AgentImg} alt="reyana" width={587} height={900} />;
  return (
    <div className="lg:w-full lg:max-w-[50%]">
      <div className="relative mt-5 z-20">
        <div className="pt-[100%] md:pt-[80%] lg:pt-[106%]"></div>
        <div
          className="absolute h-full 
        -top-[5%] sm:top-0 md:-top-[5%] lg:top-[5%]
        w-[83%] sm:w-[75%] md:w-[68%] lg:w-[125%]
        left-[10%] sm:left-[12%] md:left-[20%] lg:-left-[7%]"
        >
          <div className="block lg:hidden">{img}</div>
          <motion.div
            style={{ translateY: translateAgent }}
            className="ease-out duration-150 
            hidden lg:block"
          >
            {img}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgentImage;
