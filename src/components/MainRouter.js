import React, { Fragment } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Container from "@material-ui/core/Container";
import TopBar from "./layout/TopBar";
import MainHeader from "./MainHeader";
import ExamplesSection from "./ExamplesSection";

const MainRouter = props => {
  return (
    <Fragment>
      <TopBar />
      <Container>
        <MainHeader />
        <ExamplesSection />
      </Container>
    </Fragment>
  );
};

export default MainRouter;
