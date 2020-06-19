import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();
  //const [value, setValue] = React.useState(2);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            W
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.productName}
        //subheader="September 14, 2016"
        style={{ textAlign: "left" }}
      />
      <CardMedia
        className={classes.media}
        image={props.productImage}
        title={props.productName}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ textAlign: "left" }}
        >
          {props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating name="simple-controlled" value={props.reviewRating} />
        <Typography display="block" variant="caption" color="textPrimary">
          {props.productPrice}
        </Typography>
        <Typography
          display="block"
          variant="caption"
          color="textPrimary"
          style={{ marginLeft: "40rem", fontSize: "18px" }}
        >
          {props.productInStock}
        </Typography>
      </CardActions>
    </Card>
  );
}
