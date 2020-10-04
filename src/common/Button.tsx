import React from "react";

export type ButtonProps = {
  text: string;
  onClick: ()=> void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
