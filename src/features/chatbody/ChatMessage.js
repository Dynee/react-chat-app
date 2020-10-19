import React, { useEffect, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { api } from '../../api/api';

export const ChatMessage = ({ message }) => {
    const [first, last] = message.sentBy.split(' ');
    const displayName = `${first.substring(0, 1) + last.substring(0, 1)}`
    const d = new Date(message.sentAt);
    const itemRef = useRef(null);

    useEffect(() => {
        itemRef.current.scrollIntoView();
    }, [])

    return (
        <React.Fragment>
            <ListItem ref={itemRef} style={message.sentBy === api.currentUser ? {backgroundColor: "#addbb6"} : {backgroundColor: "#aebce6"}}>
                <ListItemAvatar>
                    <Avatar>{displayName}</Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={<React.Fragment>{message.text}</React.Fragment>}
                    secondary={<React.Fragment>{`Today at ${d.getHours()}:${d.getMinutes() < 10 ? "0": ""}${d.getMinutes()}`}</React.Fragment>}
                />
            </ListItem>
            <Divider light />
        </React.Fragment>
    )
}