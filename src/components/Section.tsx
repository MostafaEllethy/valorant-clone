import { FC, ReactNode } from "react";

const Section: FC<{
  className?: string;
  blackVLine?: boolean;
  children?: ReactNode;
}> = ({ children, className, blackVLine }) => (
  <section
    className={`relative 
px-[5%] lg:px-[7.3%] 
${className ? className : ""}`}
  >
    <span
      className={`absolute h-full top-0 border-l
    ${blackVLine ? "border-slate-900/40" : "border-slate-50/50"} z-10 
    left-[5%] lg:left-[7.3%]
    `}
    ></span>
    {children}
  </section>
);

export default Section;
