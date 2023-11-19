import { type FC, type ReactNode } from "react";

interface CardPropTypes {
  className: string;
  children: ReactNode;
}

const Card: FC<CardPropTypes> = ({ className, children }: CardPropTypes) => {
  return <div className={className}>{children}</div>;
};

export default Card;
