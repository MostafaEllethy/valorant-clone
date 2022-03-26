import { FC } from "react";

const RedSquare: FC<{ className: string }> = ({ className }) => {
  return <span className={`absolute bg-red ${className}`}></span>;
};

export default RedSquare;
