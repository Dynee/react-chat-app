import React from 'react';
import { RecipientsList } from './recipients';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useStyles } from '../styles/styles';

export const ConversationView = ({ match, conversations, user }) => {
    const classes = useStyles();
    const conversation = conversations.find(c => c.id === match.params.cid);
    return (
      <React.Fragment>
        <RecipientsList recipients={conversation.recipients} />
        <List className={classes.messagesList}>
          {conversation.messages.map((message, index) => {
              if (message.name === user) {
                  return (
                    <Grid item xs={12} alignItems="flex-end" container direction="column">
                    <div className="messageGreen" key={index}>
                    <ListItem>
                      <ListItemText 
                        primary={message.message}
                        secondary={
                          <React.Fragment>
                              Delivered
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </div>
                  </Grid>
                )
              } else {
                return (
                  <Grid container item xs={12} alignItems="flex-start" direction="column">
                    <div className="messageBlue" key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>{message.name}</Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={message.message}
                        secondary={
                          <React.Fragment>
                              {message.timestamp}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    </div>
                  </Grid>
                )
              }
            })}
        </List>
      </React.Fragment>
    )
  }