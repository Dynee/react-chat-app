import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { PrimaryButton } from '../button/PrimaryButton';

export const SendMessageBar = (
    { 
      leftSize, 
      rightSize,
      onInputChange,
      inputValue,
      sendMessageHandler,
      match
    }) => (
    <React.Fragment>
      <Grid item xs={leftSize}>
        <TextField onChange={onInputChange} value={inputValue} size="small" fullWidth id="outlined-basic" label="Enter a message" variant="outlined" />
      </Grid>
      <Grid item xs={rightSize}>
        <PrimaryButton onClick={() => { sendMessageHandler(match.params.cid) }}>
          Send
        </PrimaryButton>
      </Grid>
    </React.Fragment>
)