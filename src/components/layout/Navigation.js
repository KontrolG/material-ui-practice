import React, { useState } from "react";
import getRandomKey from "uuid/v4";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

const useIsOnSmallDevice = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};

const Navigation = ({ links }) => {
  const classes = useStyles();
  const IsOnSmallDevice = useIsOnSmallDevice();
  const linksElements = links.map(toLinkElement);

  return (
    <Box component="nav" className={classes.root} hidden={IsOnSmallDevice}>
      {linksElements}
    </Box>
  );
};

export default Navigation;
