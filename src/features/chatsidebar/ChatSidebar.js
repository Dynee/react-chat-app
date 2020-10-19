import React from 'react';
import { Chat } from './Chat';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export const ChatSidebar = ({ chats, handleModal }) => (
    <div>
        <List>
            <Paper>
                {chats.map((chat, index) => (
                    <Link to={`/c/${chat.id}`} key={index}>
                        <Chat 
                            chat={chat}
                        />
                    </Link>
                ))}
            </Paper>
        </List>
        <button onClick={handleModal} type="button">New Chat</button>
    </div>   
)