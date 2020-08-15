import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerOpenerButton = ({ hidden, ...props }) => {
  return (
    <Box display={hidden ? "none" : "unset"}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        {...props}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default DrawerOpenerButton;
