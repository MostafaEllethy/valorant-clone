import { FC } from "react";
import { motion } from "framer-motion";

const SectionHeadMotion: FC<{ children?: string }> = ({ children }) => {
  return (
    <motion.div
      initial={{ translateY: "100%" }}
      whileInView={{ translateY: 0 }}
      viewport={{ margin: "100px" }}
      transition={{ ease: "easeOut", duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionHeadMotion;
