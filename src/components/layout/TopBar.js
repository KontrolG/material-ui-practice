import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "./Navigation";
import examples from "../../examples";

const toNavigationLink = ({ title }) => ({ text: title, to: "#" });

const getMainNavigationLinks = () => {
  const examplesLinks = examples.map(toNavigationLink);
  const homeLink = { text: "Home", to: "/" };
  return [homeLink, ...examplesLinks];
};

const TopBar = props => {
  const mainNavigationLinks = getMainNavigationLinks();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Practices</Typography>
        <Navigation links={mainNavigationLinks} />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
