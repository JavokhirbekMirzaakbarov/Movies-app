import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/HomePage";
// import style from "./styles.module.scss";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
