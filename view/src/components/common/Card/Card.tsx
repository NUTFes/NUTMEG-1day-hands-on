import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={`bg-white shadow-lg rounded-lg p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
