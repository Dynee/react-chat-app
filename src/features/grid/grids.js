import React from 'react';
import Grid from '@material-ui/core/Grid';

const GridRow = ({ size, children }) => (
    <Grid item xs={size} container direction="row" alignItems="center" spacing={1}>
          {children}
    </Grid>
)
  
const GridColumn = ({ size, children }) => (
    <Grid item xs={size} container direction="column">
          {children}
    </Grid>
)

export { GridRow, GridColumn }