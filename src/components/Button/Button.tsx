import { ReactNode } from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  className?: "string";
  type: ButtonType;
  variant: ButtonVariant;
  handleClick: () => void;
  children: ReactNode;
}

function Button({ className, handleClick, type, variant, children }: ButtonProps): JSX.Element {
  const currentClass = `btn btn--${variant} ${className || ""}`;

  return (
    <button className={currentClass} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};

export default Button;
