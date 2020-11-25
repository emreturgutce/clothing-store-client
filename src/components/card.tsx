import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Shrimp and Chorizo Paella" />
      <CardMedia
        image="/public/images/clothing-1.jpg"
        title={name}
        component={'img'}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h3">
          <strong>${price}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
