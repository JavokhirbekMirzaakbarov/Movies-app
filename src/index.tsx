import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles.module.scss";

const App = () => {
  return <h1 className={style.button}>Hello World!</h1>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
