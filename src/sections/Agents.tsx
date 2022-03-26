import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import AgentImage from "../components/section-agents/AgentImage";
import Background from "../components/section-agents/Background";
import SectionHeadMotion from "../components/SectionHeadMotion";


const Agents: FC = () => {


    return <Section className="bg-red bg-contain bg-no-repeat md:bg-[url('/src/components/section-agents/agents-bg.webp')] bg-bottom pb-10 overflow-x-clip">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">

            {/* Text & CTA */}
            <div className="overflow-hidden text-white lg:w-[42%] lg:mb-[5vw] lg:ml-7 z-30">

                <h3 className="overflow-hidden relative font-tungstenBold leading-[0.94] py-7 mt-12 border-t border-slate-50/40 mb-3
            text-[3.5rem] md:text-[6.25rem] lg:text-[7.5rem]
            md:pt-10
            ">
                    <SectionHeadMotion>
                        YOUR AGENTS
                    </SectionHeadMotion>
                </h3>
                <h3 className="font-dinw05 mb-4 text-xl leading-tight tracking-[-0.01em]">CREATIVITY IS YOUR GREATEST WEAPON.</h3>
                <p className="font-dinw1g text-lg leading-snug md:max-w-lg lg:max-w-[80%]">
                    More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
                </p>
                <div className="z-30
                text-center lg:text-left
                -translate-x-1/2  lg:translate-x-0
                left-[50%] lg:left-0
                absolute lg:static
                mt-[82vw] sm:mt-[70vw] md:mt-[60vw] lg:mt-12
                ">
                    <RiotButton white>
                        View all agents
                    </RiotButton>
                </div>
            </div>

            <AgentImage />
        </div>


        <Background />
    </Section>
}

export default Agents;