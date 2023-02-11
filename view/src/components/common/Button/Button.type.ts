export type ButtonProps = {
  theme?: "primary" | "danger" | "success";
  size?: "large" | "medium" | "small";
  outlined?: boolean;
  fullWidth?: boolean;
} & JSX.IntrinsicElements["button"];
