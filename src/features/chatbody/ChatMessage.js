import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export const ChatMessage = ({ message }) => {
    const [first, last] = message.sentBy.split(' ');
    const displayName = `${first + last.substring(0, 1)}`
    const d = new Date(message.sentAt);
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={displayName} alt={displayName}/>
            </ListItemAvatar>
            <ListItemText 
                primary={<React.Fragment>{message.text}</React.Fragment>}
                secondary={<React.Fragment>{`Today at ${d.getHours()}:${d.getMinutes()}`}</React.Fragment>}
            />
        </ListItem>
    )
}