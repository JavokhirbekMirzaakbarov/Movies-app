import React from "react";
import style from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorBoundary = (props: any) => {
  const ErrorText = () => (
    <h1 className={style.error}>
      Ooops! Something went wrong! We are doing our best to recover!
    </h1>
  );

  const isOk = true;

  return <>{isOk ? props.children : <ErrorText />}</>;
};

export default ErrorBoundary;
