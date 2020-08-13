import React, { StrictMode } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainRouter from "./components/MainRouter";
import "./App.css";

const App = () => {
  return (
    <StrictMode>
      <CssBaseline />
      <MainRouter />
    </StrictMode>
  );
};

export default App;
