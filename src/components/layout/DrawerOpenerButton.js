import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerOpenerButton = ({ openDrawer }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={openDrawer}
      /* className={clsx(open && classes.hide)} */
    >
      <MenuIcon />
    </IconButton>
  );
};

export default DrawerOpenerButton;
