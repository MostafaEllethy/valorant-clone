import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import SectionHeadMotion from "../components/SectionHeadMotion";
import Background from "../components/section-maps/Background";

const Maps: FC = () => {
  return (
    <Section className="pt-[3.75rem] md:pt-[7.5rem] lg:pt-10" blackVLine>
      <div className="relative overflow-hidden pb-10 z-10">
        <div className="lg:ml-[8.5%] lg:mt-[calc(5vw+10px)] lg:mb-[5vw] lg:max-w-[42%] lg:pt-0 lg:pb-10">
          <h2
            className="overflow-hidden font-tungstenBold leading-[0.94] border-t border-slate-500
            py-[0.5em] lg:pt-8 lg:pb-0
            lg:mb-14
            text-6xl md:text-[6.25rem] lg:text-[7.5rem]"
          >
            <SectionHeadMotion>YOUR MAPS</SectionHeadMotion>
          </h2>

          <h2
            className="text-[#383e3a] font-dinw05 -tracking-[.01em] text-xl leading-tight uppercase
                mt-2 md:-mt-2
                mb-4 lg:mb-5"
          >
            Fight around the world
          </h2>
          <p
            className="text-[#768079] font-dinw1g
                leading-snug lg:leading-normal
                text-lg lg:text-base
                max-w-[31.25rem] lg:max-w-[77%]"
          >
            Each map is a playground to showcase your creative thinking.
            Purpose-built for team strategies, spectacular plays, and clutch
            moments. Make the play others will imitate for years to come.
          </p>
          <div
            className="
                text-center lg:text-left 
                mt-[25rem] lg:mt-12"
          >
            <RiotButton accentBorder>View all maps</RiotButton>
          </div>
        </div>
      </div>

      <Background />
    </Section>
  );
};

export default Maps;
