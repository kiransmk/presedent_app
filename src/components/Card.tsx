import { ReactNode } from "react";

type CardPros = {
  children: ReactNode;
};

const Card = ({ children }: CardPros) => (
  <div className="rounded outline outline-1 outline-gray-200">{children}</div>
);

export default Card;
