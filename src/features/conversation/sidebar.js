import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../styles/styles';

export const Sidebar = ({ size, children }) => {
    const classes = useStyles();
    return (
      <Grid item xs={size} className={classes.conversations}>
        <Paper className={classes.paper}>
          {children.map((child, index) => (
            <Grid item key={index}>
              {child}
            </Grid>
          ))}
        </Paper>
      </Grid>
    )
  }