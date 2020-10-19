import React from 'react';
import { RecipientsList } from './RecipientsList';
import { RecentChatMessage } from './RecentChatMessage';
import Avatar from '@material-ui/core/Avatar';

export const Chat = ({ chat }) => (
    <div>
        <Avatar src={chat.avatar} alt={chat.alt}/>
        <RecipientsList recipients={chat.recipients}/>
        <RecentChatMessage messages={chat.messages} />
    </div>
)