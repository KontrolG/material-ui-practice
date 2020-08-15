import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const NavigationDrawer = ({ classes, isOpen, closeDrawer }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      className={classes.drawer}
      open={isOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <List></List>
    </Drawer>
  );
};

export default NavigationDrawer;
