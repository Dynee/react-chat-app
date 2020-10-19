import React from 'react';
import { Chat } from './Chat';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';

export const ChatSidebar = ({ chats, handleModal }) => (
    <div>
        <List>
            {chats.map((chat, index) => (
                <Link to={`/c/${chat.id}`}>
                    <Chat 
                        key={index}
                        chat={chat}
                    />
                </Link>
            ))}
        </List>
        <button onClick={handleModal} type="button">New Chat</button>
    </div>   
)