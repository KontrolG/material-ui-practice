import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import TopBar from "./layout/TopBar";
import MainHeader from "./MainHeader";
import ExamplesSection from "./ExamplesSection";
import NavigationDrawer from "./layout/NavigationDrawer";
import useToggleOpen from "../hooks/useToggleOpen";
import useMatchesBreakpoint from "../hooks/useMatchesBreakpoint";
import getMainNavigationLinks from "./getMainNavigationLinks";

const MainRouter = () => {
  const [drawerIsOpen, openDrawer, closeDrawer] = useToggleOpen(false);
  const isOnSmallDevice = useMatchesBreakpoint("down", "sm");
  const mainNavigationLinks = getMainNavigationLinks();

  return (
    <Fragment>
      <TopBar
        {...{ drawerIsOpen, openDrawer, mainNavigationLinks, isOnSmallDevice }}
      />
      <Container component="main">
        <MainHeader />
        <ExamplesSection />
      </Container>
      <NavigationDrawer
        isOpen={drawerIsOpen}
        closeDrawer={closeDrawer}
        links={mainNavigationLinks}
        hidden={!isOnSmallDevice}
      />
    </Fragment>
  );
};

export default MainRouter;
