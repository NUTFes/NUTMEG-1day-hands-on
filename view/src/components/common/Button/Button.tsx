import type { ButtonProps } from "./Button.type";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className="bg-background text-secondary rounded-md shadow-md p-2 hover:bg-orange-600 transition-all"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
