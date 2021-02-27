import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
  margin: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
    '& > * + *': {
      marginLeft: theme.spacing(4),
      marginTop:theme.spacing(4)
    },
  }
  
}));

export default function LoaderProgress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className="progress" />
    </div>
  );
}