import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const TopBar = props => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h6">Practices</Typography>
          </Grid>
          <Grid item component="nav">
            <Link href="#" color="inherit">
              Inicio
            </Link>
            <Link href="#" color="inherit">
              Sample 1
            </Link>
            <Link href="#" color="inherit">
              Sample 2
            </Link>
            <Link href="#" color="inherit">
              Sample 3
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
