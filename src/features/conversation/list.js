import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    maxHeight: '500px',
    overflow: 'auto'
  },
  inline: {
    display: 'inline',
  },
}));

export const ConversationItem = ({ id, avatar, name, text }) => {
    const [firstName, lastName] = name.split(' ');
    const displayName = `${firstName} ${lastName.substring(0, 1)}`;
    const displayText = text.substring(0, 20);
    return (
        <Link to={`/c/${id}`} style={{textDecoration: "none"}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="G" src={avatar}/>
                </ListItemAvatar>
                <ListItemText 
                    primary={displayName}
                    secondary={
                        <React.Fragment>
                            {displayText}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </Link>
    )
}

export function ConversationList({ conversations }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {conversations.map((conversation, index) => (
          <React.Fragment
            key={index}
          >
              <ConversationItem 
                id={conversation.id}
                avatar={conversation.recipients[0].avatar}
                name={conversation.recipients[0].name}
                text={conversation.messages[0].message}
              />
              <Divider variant="inset" component="li" />
          </React.Fragment>
      ))}
    </List>
  );
}
