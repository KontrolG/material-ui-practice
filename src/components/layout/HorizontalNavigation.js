import React from "react";
import getRandomKey from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const navigationLinksSelector = "& > a";
const navigationLinksOnHoverSelector = `${navigationLinksSelector}:hover`;

const useStyles = makeStyles(theme => {
  const inheritHeight = { minHeight: "inherit", height: "inherit" };
  return {
    root: {
      ...inheritHeight,
      [navigationLinksSelector]: {
        ...inheritHeight,
        display: "inline-flex",
        alignItems: "center",
        padding: theme.spacing(2),
        borderBottom: "2px solid transparent"
      },
      [navigationLinksOnHoverSelector]: {
        transition: theme.transitions.create("border-bottom-color"),
        borderBottomColor: "currentColor"
      }
    }
  };
});

const toLinkElement = ({ to, text }) => (
  <Link href={to} color="inherit" key={getRandomKey()} underline="none">
    {text}
  </Link>
);

const HorizontalNavigation = ({ links, ...props }) => {
  const classes = useStyles();
  const linksElements = links.map(toLinkElement);

  return (
    <Box component="nav" className={classes.root} {...props}>
      {linksElements}
    </Box>
  );
};

export default HorizontalNavigation;
