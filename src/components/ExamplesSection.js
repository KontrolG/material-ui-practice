import React from "react";
import getRandomKey from "uuid/v4";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExampleCard from "./ExampleCard";
import examples from "../data/examples";

const toGridExampleItems = example => (
  <Grid item md={4} sm={6} xs={12} key={getRandomKey()}>
    <ExampleCard {...example} />
  </Grid>
);

const ExamplesSection = props => {
  const exampleItems = examples.map(toGridExampleItems);

  return (
    <Box component="section" marginBottom={4}>
      <Typography variant="h2" gutterBottom>
        Examples
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={2}
      >
        {exampleItems}
      </Grid>
    </Box>
  );
};

export default ExamplesSection;
