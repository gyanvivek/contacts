import React from "react";

export type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <button className="button">{text}</button>;
};

export default Button;
