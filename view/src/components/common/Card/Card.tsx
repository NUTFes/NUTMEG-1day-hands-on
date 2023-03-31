import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-5 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
