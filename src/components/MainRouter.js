import React, { Fragment } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TopBar from "./layout/TopBar";
import MainHeader from "./MainHeader";
import ExamplesSection from "./ExamplesSection";
import useDrawerStyles from "../hooks/useDrawerStyles";
import NavigationDrawer from "./layout/NavigationDrawer";
import useToggleOpen from "../hooks/useToggleOpen";

const MainRouter = props => {
  const classes = useDrawerStyles();
  const [drawerIsOpen, openDrawer, closeDrawer] = useToggleOpen(false);
  const { drawer, drawerPaper, drawerHeader } = classes;
  const { appBar, appBarShift } = classes;

  return (
    <Box display="flex">
      <TopBar classes={{ appBar, appBarShift }} openDrawer={openDrawer} />
      <Container
        component="main"
        className={clsx(classes.content, drawerIsOpen && classes.contentShift)}
      >
        <Box className={classes.drawerHeader} />
        <MainHeader />
        <ExamplesSection />
      </Container>
      <NavigationDrawer
        classes={{ drawer, drawerPaper, drawerHeader }}
        isOpen={drawerIsOpen}
        closeDrawer={closeDrawer}
      />
    </Box>
  );
};

export default MainRouter;
