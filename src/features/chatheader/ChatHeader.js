import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { RecipientsList } from '../chatsidebar/RecipientsList';
import { ChatBody } from '../chatbody/ChatBody';

export const ChatHeader = ({ match, chats, handleChatMessage }) => { 
    const currentChat = chats.find(chat => chat.id === match.params.cid);
    return (
        <div className="ChatHeader">
            <Avatar src={currentChat.avatar} alt={currentChat.alt} />
            <RecipientsList recipients={currentChat.recipients} />
            <ChatBody handleChatMessage={handleChatMessage} chat={currentChat}/>
        </div>
    )
}