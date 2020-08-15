import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const width = 240;

const useStyles = makeStyles(theme => ({
  root: {
    width,
    flexShrink: 0
  },
  paper: {
    width
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  }
}));

const NavigationDrawer = ({ isOpen, closeDrawer }) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      className={classes.root}
      open={isOpen}
      classes={{
        paper: classes.paper
      }}
    >
      <Box className={classes.header} component="header">
        <IconButton onClick={closeDrawer}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <List></List>
    </Drawer>
  );
};

export default NavigationDrawer;
