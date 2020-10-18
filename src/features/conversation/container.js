import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Sidebar } from './sidebar';
import { ConversationList } from './list';
import { PrimaryButton } from '../button/PrimaryButton';
import { Route } from 'react-router-dom';
import { ConversationWindow } from './window';
import { GridRow, GridColumn } from '../grid/grids';
import { useStyles } from '../styles/styles';
import { ConversationView } from './view';
import { SendMessageBar } from './messagebar';

export function ConversationContainer({ onAddNewConvo, onMessageSent, conversations, user }) {
    const classes = useStyles();
  
    const [message, setMessage] = useState('')
  
    const handleInputChange = (event) => {
      const { value } = event.target;
      setMessage(value);
    }
  
    const sendMessage = (cid) => {
      onMessageSent(cid, message)
      setMessage('');
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Sidebar size={3} height="500px" classes={classes}>
            <ConversationList conversations={conversations}/>
            <PrimaryButton onClick={onAddNewConvo}>
              New Conversation
            </PrimaryButton>
          </Sidebar>
          <Route path="/c/:cid" render={({ match }) => (
            <ConversationWindow
              size={8}
            >
              <GridColumn size={12}> 
                <ConversationView match={match} conversations={conversations} user={user} />
              </GridColumn>
              <GridRow size={12}>
                <SendMessageBar 
                  onInputChange={handleInputChange}
                  sendMessageHandler={sendMessage}
                  match={match}
                  leftSize={10}
                  rightSize={2}
                  inputValue={message}
                />
              </GridRow>
            </ConversationWindow>
          )} />
        </Grid>
      </div>
    );
  }
  