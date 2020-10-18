import React from 'react';
import Button from '@material-ui/core/Button';

export const PrimaryButton = ({ onClick, children }) => (
    <Button fullWidth onClick={onClick} variant="contained" color="primary">
      {children}
    </Button>
)