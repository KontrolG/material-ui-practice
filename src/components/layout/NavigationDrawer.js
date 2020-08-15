import React from "react";
import getRandomKey from "uuid/v4";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
  },
  list: {
    "& > li": {
      padding: 0,
      margin: 0,
      "& > a": {
        padding: "0.5em 0.5em 0.5em 1.5em",
        display: "block",
        width: "100%"
      }
    }
  }
}));

const toListItem = ({ to, text }) => (
  <ListItem key={getRandomKey()}>
    <Link href={to}>{text}</Link>
  </ListItem>
);

const NavigationDrawer = ({ isOpen, closeDrawer, links }) => {
  const listItems = links.map(toListItem);
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
      <List className={classes.list}>{listItems}</List>
    </Drawer>
  );
};

export default NavigationDrawer;
