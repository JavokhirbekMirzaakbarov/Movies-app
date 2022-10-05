import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/HomePage";
import { StyledEngineProvider } from "@mui/material/styles";
// import style from "./styles.module.scss";

const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
