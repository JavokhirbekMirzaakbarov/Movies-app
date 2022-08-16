import React from "react";
import { ButtonProps } from "../../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Button extends React.PureComponent<ButtonProps> {
  render() {
    return <button {...this.props}>{this.props.text.toUpperCase()}</button>;
  }
}

export default Button;
