import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerOpenerButton = props => {
  return (
    <IconButton color="inherit" aria-label="open drawer" edge="end" {...props}>
      <MenuIcon />
    </IconButton>
  );
};

export default DrawerOpenerButton;
