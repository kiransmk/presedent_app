import React, { ReactNode } from "react";

type CardPros = {
  children: ReactNode;
};

const Card: React.FC<CardPros> = ({ children }) => (
  <div className="rounded outline outline-1 outline-gray-200">{children}</div>
);

export default Card;
