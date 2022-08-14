import React from "react";
import { ButtonProps } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (props: ButtonProps) => (
  <button {...props}>{props.text.toUpperCase()}</button>
);

export default Button;
