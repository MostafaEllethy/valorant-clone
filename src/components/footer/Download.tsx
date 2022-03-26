import { FC } from "react";

const links: string[] = [
  "Download Game Client",
  "Download Riot Mobile Companion App",
];

const Download: FC = () => (
  <section className="select-none font-markpro bg-[#292929] p-6 text-[#f9f9f9] font-bold text-[13px] tracking-[0.08em] text-center uppercase">
    {links.map((link) => (
      <div key={link} className="my-3 last:mt-0 lg:inline-block lg:my-0">
        <div className="inline-block cursor-pointer py-2 px-4 hover:bg-gray-400/20 transition duration-200 rounded-md">
          {link}
        </div>
      </div>
    ))}
  </section>
);

export default Download;
