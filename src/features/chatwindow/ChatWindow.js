import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../styles/Styles';

export const ChatWindow = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </div>
    )
}