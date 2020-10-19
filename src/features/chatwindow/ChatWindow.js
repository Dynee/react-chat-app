import React from 'react';
import Grid from '@material-ui/core/Grid';

export const ChatWindow = ({ children }) => {
    return (
        <div className="ChatWindow">
            <Grid container spacing={2}>
                {children}
            </Grid>
        </div>
    )
}