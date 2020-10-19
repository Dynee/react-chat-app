import React from 'react';
import { Chat } from './Chat';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export const ChatSidebar = ({ chats, handleModal }) => (
    <div>
        <List style={{overflow: "auto", height: "700px"}}>
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
        <Button fullWidth onClick={handleModal} variant="contained" color="primary">New Chat</Button>
    </div>   
)