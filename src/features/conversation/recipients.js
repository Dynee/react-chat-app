import React from 'react';
import { useStyles } from '../styles/styles';
import Paper from '@material-ui/core/Paper';

export const RecipientsList = ({ recipients }) => {
    const classes = useStyles();
    return (
      <Paper className={classes.paper}>
        {recipients.map((recipient, index) => {
          return (
            <span key={index}> {recipient.name}</span>
          )
        })}
      </Paper>
    )
}