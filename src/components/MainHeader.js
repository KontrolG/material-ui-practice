import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  firstHeading: {
    margin: "0.5em 0 0.25em"
  },
  copy: {
    margin: "0 auto 2em",
    width: "90%",
    maxWidth: "90ch"
  }
});

const MainHeader = props => {
  const classes = useStyles();
  return (
    <Box component="header">
      <Typography variant="h1" align="center" className={classes.firstHeading}>
        Welcome
      </Typography>
      <Typography variant="body1" align="center" className={classes.copy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis
        in doloremque quo eum aut consequatur aliquam ducimus praesentium autem
        quaerat unde, laboriosam debitis placeat minima temporibus?
      </Typography>
    </Box>
  );
};

export default MainHeader;
