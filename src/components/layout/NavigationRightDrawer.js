import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  drawer: {}
})
const NavigationRightDrawer = props => {
  return (
    <Drawer
      className={""}
      variant="persistent"
      anchor="right"
      open={""}
      classes={""}
    >
      <div className={""}>
        <IconButton onClick={() => {}}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{""}</List>
    </Drawer>
  );
};

export default NavigationRightDrawer;
