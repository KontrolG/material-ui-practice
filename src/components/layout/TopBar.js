import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HorizontalNavigation from "./HorizontalNavigation";
import DrawerOpenerButton from "../DrawerOpenerButton";
import Box from "@material-ui/core/Box";

const TopBar = ({
  openDrawer,
  drawerIsOpen,
  mainNavigationLinks,
  isOnSmallDevice
}) => {
  const visibleNavigation = isOnSmallDevice ? (
    <DrawerOpenerButton hidden={drawerIsOpen} onClick={openDrawer} />
  ) : (
    <HorizontalNavigation links={mainNavigationLinks} />
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box marginRight="auto">
          <Typography variant="h6">Practices</Typography>
        </Box>
        {visibleNavigation}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
