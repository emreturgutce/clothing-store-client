import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 330,
    },
  }),
);

export default function RecipeReviewCard({
  name,
  price,
  id,
}: {
  name: string;
  price: string;
  id: string;
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <RouterLink to={`products/${id}`}>
        <CardHeader title={name} />
      </RouterLink>
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
