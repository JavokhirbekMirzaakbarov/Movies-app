import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (props: any) => <button {...props}>{props.text}</button>;

export default Button;
