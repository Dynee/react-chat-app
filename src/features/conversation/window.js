import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../styles/styles';

export const ConversationWindow = ({ size, children }) => {
    const classes = useStyles();
    return (
      <Grid item xs={size} className={classes.chatWindow}>
        <Paper className={classes.paper}>
          {children}
        </Paper>
      </Grid>
    )
}