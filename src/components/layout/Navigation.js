import React from "react";
import getRandomKey from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const navigationLinksSelector = "& > a";

const useStyles = makeStyles({
  root: {
    [navigationLinksSelector]: {
      padding: "1em",
      margin: "0 0.5em"
    }
  }
});

const toLinkElement = ({ to, text }) => (
  <Link href={to} color="inherit" key={getRandomKey()}>
    {text}
  </Link>
);

const Navigation = ({ links, ...props }) => {
  const classes = useStyles();
  const linksElements = links.map(toLinkElement);

  return (
    <Box component="nav" className={classes.root} {...props}>
      {linksElements}
    </Box>
  );
};

export default Navigation;
