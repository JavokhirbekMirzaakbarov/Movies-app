import React, { ErrorInfo, ReactElement } from "react";
import style from "./styles.module.scss";

type Props = {
  children?: ReactElement;
};

type State = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <h1 className={style.error}>
          Ooops! Something went wrong! We are doing our best to recover!
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
