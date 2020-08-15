import React, { Fragment } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TopBar from "./layout/TopBar";
import MainHeader from "./MainHeader";
import ExamplesSection from "./ExamplesSection";
import NavigationDrawer from "./layout/NavigationDrawer";
import useToggleOpen from "../hooks/useToggleOpen";

const MainRouter = props => {
  const [drawerIsOpen, openDrawer, closeDrawer] = useToggleOpen(false);

  return (
    <Fragment>
      <TopBar {...{ drawerIsOpen, openDrawer }} />
      <Container component="main">
        <MainHeader />
        <ExamplesSection />
      </Container>
      <NavigationDrawer isOpen={drawerIsOpen} closeDrawer={closeDrawer} />
    </Fragment>
  );
};

export default MainRouter;
