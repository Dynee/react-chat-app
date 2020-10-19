import React from 'react';
import { Chat } from './Chat';

export const ChatSidebar = ({ chats }) => (
    <div>
        <ul>
            {chats.map((chat, index) => (
                <Chat 
                    key={index}
                    chat={chat}
                />
            ))}
        </ul>
        <button type="button">New Chat</button>
    </div>   
)