import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "./Navigation";
import DrawerOpenerButton from "./DrawerOpenerButton";
import examples from "../../examples";

const toNavigationLink = ({ title }) => ({ text: title, to: "#" });

const getMainNavigationLinks = () => {
  const examplesLinks = examples.map(toNavigationLink);
  const homeLink = { text: "Home", to: "/" };
  return [homeLink, ...examplesLinks];
};

const TopBar = ({ classes, openDrawer, drawerIsOpen }) => {
  const mainNavigationLinks = getMainNavigationLinks();

  return (
    <AppBar
      position="sticky"
      className={clsx(classes.appBar, drawerIsOpen && classes.appBarShift)}
    >
      <Toolbar>
        <Typography variant="h6">Practices</Typography>
        <Navigation links={mainNavigationLinks} />
        <DrawerOpenerButton hidden={drawerIsOpen} onClick={openDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
