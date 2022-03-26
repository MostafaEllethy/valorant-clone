import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import Polygons from "../components/section-we-are/Polygons";
import RedSquare from "../components/section-we-are/RedSquare";
import SectionHeadMotion from "../components/SectionHeadMotion";

const WeAre: FC = () => (
  <Section blackVLine>
    <div className="relative w-full pt-[3.125rem]">
      <div className="relative pt-10 pb-5">
        <Polygons />

        {/* Large Title */}
        <h2
          className="text-[#0f1923] mb-9 py-3 font-tungstenBold uppercase overflow-hidden
                text-[3.375rem] md:text-8xl lg:text-[7.5rem]
                leading-[0.94] md:leading-[0.86]
                lg:pl-[8.5%]"
        >
          <SectionHeadMotion>WE ARE VALORANT</SectionHeadMotion>
        </h2>

        <div className="relative lg:flex lg:flex-wrap lg:items-center">
          {/* Paragraph */}
          <div className="lg:ml-[15%] lg:mb-20 lg:py-10 lg:max-w-[calc(25%)]">
            <h2
              className="font-dinw05 text-xl leading-tight text-[#383e3a]
                        my-4 lg:my-6"
            >
              DEFY THE LIMITS
            </h2>
            <p
              className="text-[#768079] font-dinw1g relative
                        pr-[10%] lg:pr-0
                        leading-snug lg:leading-normal
                        text-lg lg:text-base
                        lg:w-[102%]"
            >
              Blend your style and experience on a global, competitive stage.
              You have 13 rounds to attack and defend your side using sharp
              gunplay and tactical abilities. And, with one life per-round,
              you'll need to think faster than your opponent if you want to
              survive. Take on foes across Competitive and Unranked modes as
              well as Deathmatch and Spike Rush.
              <RedSquare className="bottom-0 -left-1/3 w-2 h-2" />
            </p>
            <div className="text-center mt-12 lg:relative lg:-left-1/4 xl:left-0">
              <RiotButton accentBorder>Learn The Game</RiotButton>
            </div>
          </div>

          <div
            className="md:py-16 
            lg:w-[calc(50%)] lg:ml-[9.5%]
            py-11 lg:py-0"
          >
            <div
              className="relative
            lg:-ml-[6vw] lg:left-[7.5vw]"
            >
              {/* Squares */}
              <div
                className="hidden relative w-14 h-2
              lg:block"
              >
                <RedSquare className="w-2 h-2 left-0" />
                <RedSquare className="w-2 h-2 right-0" />
              </div>

              {/* Video Container */}
              <div className="relative group cursor-pointer lg:mt-7">
                <video
                  preload="true"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="lg:absolute w-full h-full object-cover object-center"
                >
                  <source
                    src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Overlay Button */}
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <span className="relative inline-block w-[4.25rem] h-[4.25rem] border bg-red/30 overflow-hidden">
                    <svg
                      viewBox="0 0 72 72"
                      className="relative group-hover:scale-[1.15] ease-in-out duration-150 z-20"
                    >
                      <path
                        fill="none"
                        stroke="#ece8e1"
                        d="M33.5 34.5v-5l8 6v2l-8 6v-5m28-29l-7 7m-38 38l-7 7"
                      ></path>
                    </svg>
                    <div
                      className="absolute h-full w-[120%] bg-black -left-[130%] top-0 -skew-x-12
                                    group-hover:-left-[10%] z-10 ease-in-out duration-150
                                    "
                    ></div>
                  </span>
                </div>

                {/* Aspect Ratio Adjustment */}
                <div className="lg:pt-[55%]"></div>

                <span className="absolute top-5 -left-[3.75%] px-[3.75%] bg-red text-white font-dinw1g font-bold">
                  Gameplay
                </span>
              </div>
              <div
                className="bg-red w-28
              h-[3px] lg:h-[5px]"
              ></div>
            </div>
          </div>

          <RedSquare className="left-0 top-0 w-2 h-2 hidden lg:block" />
        </div>
      </div>
    </div>

    {/* Polygons on Large Screens */}
    <span
      className="absolute border-solid bottom-0 left-0 border-l-red border-t-[transparent] z-10
    lg:border-t-[5vw]
    lg:border-l-[7.3vw]
    "
    ></span>
    <div className="absolute w-20 bottom-0 right-0 bg-red z-10 h-1 hidden lg:block"></div>
  </Section>
);

export default WeAre;
