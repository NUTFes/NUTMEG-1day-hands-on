import { useMemo } from "react";
import type { ButtonProps } from "./Button.type";

const Button = (props: ButtonProps) => {
  const {
    className,
    theme = "primary",
    size = "medium",
    outlined = false,
    children,
    fullWidth,
    ...rest
  } = props;

  // outlinedがtrueの時枠線を表示する
  const themeClass = useMemo(() => {
    switch (theme) {
      case "primary":
        if (outlined) {
          return "text-primary border-primary";
        } else {
          return "bg-primary text-white";
        }
      case "success":
        if (outlined) {
          return "text-success border-success";
        } else {
          return "bg-success text-white";
        }
      case "danger":
        if (outlined) {
          return "text-danger border-danger";
        } else {
          return "bg-danger text-white";
        }
    }
  }, [theme, outlined]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
    }
  }, [size]);

  return (
    <button
      type="button"
      className={`
        rounded
        ${className}
        ${themeClass}
        ${sizeClass}
        ${outlined ? "border border-gray-300" : ""}
        ${fullWidth ? "full-width" : ""}
        `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
