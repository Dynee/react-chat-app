import React from 'react';
import { RecipientsList } from './RecipientsList';
import { RecentChatMessage } from './RecentChatMessage';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export const Chat = ({ chat }) => (
    <ListItem>
       <ListItemAvatar>
        <Avatar src={chat.avatar} alt={chat.alt}/>
       </ListItemAvatar>
       <ListItemText 
            primary={<RecipientsList showAvatar={false} recipients={chat.recipients}/>}
            secondary={<RecentChatMessage messages={chat.messages} />}
       />
    </ListItem>
)