import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  media: {
    height: "10rem"
  }
});

const useLoadImage = imageSrc => {
  const [image, setImage] = useState(null);

  const loadImage = async () => {
    const imageImport = await import("../assets/img/test.jpg");
    setImage(imageImport);
  };

  const loadImageOnMount = () => {
    loadImage();
  };

  useEffect(loadImageOnMount, []);

  return image && image.default;
};

const ExampleCard = ({ imageSrc, title, description }) => {
  const classes = useStyles();
  const image = useLoadImage(imageSrc);

  return (
    <Card>
      {image && (
        <CardMedia
          image={image}
          title={`Thumbnail for ${title}`}
          className={classes.media}
        />
      )}
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link href="" underline="none">
          <Button color="primary" size="small">
            Visit preview
          </Button>
        </Link>
        <Link href="" underline="none">
          <Button size="small">See code</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ExampleCard;
