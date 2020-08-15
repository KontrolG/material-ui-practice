import React, { StrictMode } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <StrictMode>
      <CssBaseline />
      <MainRouter />
    </StrictMode>
  );
};

export default App;
