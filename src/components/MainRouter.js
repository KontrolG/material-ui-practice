import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TopBar from "./TopBar";

const MainRouter = props => {
  return (
    <Fragment>
      <TopBar />
      <Container>
        <Typography variant="h1" align="center" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reiciendis in doloremque quo eum aut consequatur aliquam ducimus
          praesentium autem quaerat unde, laboriosam debitis placeat minima
          temporibus? Quo sint molestias fugiat modi impedit? Aliquid iusto
          deserunt officia officiis numquam, placeat sequi vel beatae eaque id
        </Typography>
        <Typography variant="h2">Section 1</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item sm={4}>
            <Card>
              <CardHeader title="Sub-section 1"></CardHeader>
              <CardContent>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  reiciendis in doloremque quo eum aut consequatur aliquam
                  ducimus praesentium autem quaerat unde, laboriosam debitis
                  placeat minima temporibus? Quo sint molestias fugiat modi
                  impedit? Aliquid iusto deserunt officia officiis numquam,
                  placeat sequi vel beatae eaque id
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <CardHeader title="Sub-section 2"></CardHeader>
              <CardContent>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  reiciendis in doloremque quo eum aut consequatur aliquam
                  ducimus praesentium autem quaerat unde, laboriosam debitis
                  placeat minima temporibus? Quo sint molestias fugiat modi
                  impedit? Aliquid iusto deserunt officia officiis numquam,
                  placeat sequi vel beatae eaque id
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <CardHeader title="Sub-section 3"></CardHeader>
              <CardContent>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  reiciendis in doloremque quo eum aut consequatur aliquam
                  ducimus praesentium autem quaerat unde, laboriosam debitis
                  placeat minima temporibus? Quo sint molestias fugiat modi
                  impedit? Aliquid iusto deserunt officia officiis numquam,
                  placeat sequi vel beatae eaque id
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default MainRouter;
