import React from 'react';
import { Chat } from './Chat';
import { Link } from 'react-router-dom';

export const ChatSidebar = ({ chats, handleModal }) => (
    <div>
        <ul>
            {chats.map((chat, index) => (
                <Link to={`/c/${chat.id}`}>
                    <Chat 
                        key={index}
                        chat={chat}
                    />
                </Link>
            ))}
        </ul>
        <button onClick={handleModal} type="button">New Chat</button>
    </div>   
)