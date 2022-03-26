import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import BackgroundVideo from "../components/section-hero/BackgroundVideo";
import CornerTri from "../components/section-hero/CornerTri";
import ValorantLogo from "../components/ValorantLogo";

const Hero: FC = () => {
  return (
    <Section>
      <BackgroundVideo />
      <CornerTri />

      {/* Main Container */}
      <div
        className="relative py-10 lg:px[5%] text-white max-w-7xl mx-auto
        h-[30rem] lg:h-[42vw]
        lg:flex lg:flex-col lg:justify-center lg:items-center"
      >
        {/* Logo & Text Container */}
        <div
          className="text-center flex
            my-9 lg:mb-0
            flex-col lg:flex-col-reverse
            lg:w-2/3"
        >
          {/* Logo Container */}
          <div
            className="w-5/6 max-w-xs
                mx-auto lg:max-w-none"
            style={{ filter: "drop-shadow(0 0 0.75em rgba(0,0,0,.3))" }}
          >
            <ValorantLogo />
          </div>
          <p
            className="font-dinw05
                text-lg lg:text-base
                my-4 lg:mb-9 lg:mt-0"
          >
            A 5v5 character-based tactical shooter
          </p>
        </div>

        {/* Button Container */}
        <div
          className="absolute lg:relative
            bottom-[1.7rem] lg:bottom-0 
            -translate-x-1/2 lg:translate-x-0
            left-1/2 lg:left-0
            lg:mt-[2.65rem] lg:mb-[3.75rem]
            "
        >
          <RiotButton>Play Free</RiotButton>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
