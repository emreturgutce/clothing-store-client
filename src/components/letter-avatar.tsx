import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
  }),
);

export default function LetterAvatar({ firstLetter }: { firstLetter: string }) {
  const classes = useStyles();

  return <Avatar className={classes.orange}>{firstLetter}</Avatar>;
}
