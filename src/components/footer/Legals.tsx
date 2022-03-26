import { FC } from "react";

const links: string[] = [
  "Privacy Notice",
  "Terms of Service",
  "Cookie Preferences",
];

const Legals: FC = () => {
  return (
    <div className="select-none font-ffmark py-6 px-7 font-bold text-[13px] tracking-[0.08em] text-center uppercase">
      <ul
        className="flex flex-wrap justify-center items-center 
      flex-col xl:flex-row"
      >
        {links.map((item) => (
          <li className="my-3 first:mt-0 last:mb-0 xl:my-0" key={item}>
            <span
              className="block py-2 px-4 text-white transition duration-200 leading-[1.15]
            hover:cursor-pointer hover:bg-gray-400/20 hover:rounded-md"
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legals;
