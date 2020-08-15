import React, { StrictMode } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainRouter from "./MainRouter";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const getApplicationTheme = () => {
  const theme = createMuiTheme({
    palette: {
      primary: { main: blue[500] },
      secondary: { main: blue[200] }
    }
  });
  return responsiveFontSizes(theme);
};

const App = () => {
  const applicationTheme = getApplicationTheme();
  return (
    <StrictMode>
      <CssBaseline />
      <ThemeProvider theme={applicationTheme}>
        <MainRouter />
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
