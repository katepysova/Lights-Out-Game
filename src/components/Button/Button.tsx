import { ReactNode, memo } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  className?: string;
  type: ButtonType;
  variant: ButtonVariant;
  handleClick: () => void;
  children: ReactNode;
}

const Button = memo(function Button({
  className = "",
  handleClick,
  type,
  variant,
  children,
}: ButtonProps): JSX.Element {
  const currentClass = `btn btn--${variant} ${className || ""}`;

  return (
    <button className={currentClass} type={type} onClick={handleClick}>
      {children}
    </button>
  );
});

export default Button;
