import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export function LinearQuery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress variant="query" />
      <LinearProgress variant="query" color="secondary" />
    </div>
  );
}

export default {
  title: "Material-ui|progress|LinearQuery.stories"
};
