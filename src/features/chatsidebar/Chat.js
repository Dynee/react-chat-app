import React, { useEffect, useRef } from 'react';
import { RecentChatMessage } from './RecentChatMessage';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

export const Chat = ({ chat }) => {
    const [_, next] = chat.recipients;
    const [firstName, lastName] = next.split(' ');
    const displayString = `${firstName} ${lastName.substring(0, 1)}`;
    const itemRef = useRef(null);

    useEffect(() => {
        itemRef.current.scrollIntoView();
    }, [])

    return (
        <Paper>
            <ListItem ref={itemRef}>
                <ListItemAvatar>
                    <Avatar src={chat.avatar} alt={chat.alt}/>
                </ListItemAvatar>
                <Grid container direction="column" alignItems="center">
                    <ListItemText 
                        primary={<React.Fragment>{displayString}</React.Fragment>}
                    />
                    <ListItemText 
                        primary={<RecentChatMessage messages={chat.messages}/>}
                    />
                </Grid>
            </ListItem>
            <Divider light/>
        </Paper>
    )
}