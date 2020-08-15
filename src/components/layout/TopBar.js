import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "./Navigation";
import DrawerOpenerButton from "../DrawerOpenerButton";
import Box from "@material-ui/core/Box";

const TopBar = ({
  openDrawer,
  drawerIsOpen,
  mainNavigationLinks,
  isOnSmallDevice
}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box marginRight="auto">
          <Typography variant="h6">Practices</Typography>
        </Box>
        <Navigation links={mainNavigationLinks} hidden={isOnSmallDevice} />
        <DrawerOpenerButton
          hidden={drawerIsOpen || !isOnSmallDevice}
          onClick={openDrawer}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
