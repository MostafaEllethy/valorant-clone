import { FC } from "react";
import Section from "../components/Section";
import BackgroundText from "../components/section-news/BackgroundText";
import GoToNews from "../components/section-news/GoToNews";
import Slider from "../components/section-news/Slider";
import SectionHeadMotion from "../components/SectionHeadMotion";

const News: FC = () => {
  return (
    <Section className="overflow-hidden" blackVLine>
      <BackgroundText />

      {/* Main Container */}
      <div
        className="relative mx-auto max-w-[76.875rem]
        pt-[4.375rem] lg:pt-[8.75rem]
        pb-[10vw] lg:pb-[6.25rem]
        "
      >
        {/* Red Squares */}
        <div
          className="left-1/2 -translate-x-1/2 absolute w-14 
            top-8 lg:top-16
            "
        >
          <span className="bg-red w-2 h-2 absolute"></span>
          <span className="bg-red w-2 h-2 absolute right-0"></span>
        </div>

        {/* Flex Header */}
        <div className="flex justify-between">
          <h2
            className="z-20 overflow-hidden relative text-red font-tungstenBold
            translate-y-[24%] lg:translate-y-[20%]
            leading-[0.95]
            text-[3.44rem] md:text-[6.25rem] lg:text-[7.5rem]
            py-1.5 lg:py-0"
          >
            <SectionHeadMotion>LATEST NEWS</SectionHeadMotion>
          </h2>
          <div className="hidden lg:flex">
            <GoToNews />
          </div>
        </div>

        <Slider />

        <div className="block lg:hidden">
          <GoToNews />
        </div>
      </div>
    </Section>
  );
};

export default News;
