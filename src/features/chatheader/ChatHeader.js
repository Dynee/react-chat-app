import React from 'react';
import { RecipientsList } from '../chatsidebar/RecipientsList';
import { ChatBody } from '../chatbody/ChatBody';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

export const ChatHeader = ({ match, chats, handleChatMessage }) => { 
    const currentChat = chats.find(chat => chat.id === match.params.cid);
    return (
        <Grid container direction="column">
            <Paper style={{height: "700px"}}>
                <Grid container direction="row">
                    <ListItem>
                        <RecipientsList showAvatar recipients={currentChat.recipients} />
                    </ListItem>
                </Grid>
                <ChatBody handleChatMessage={handleChatMessage} chat={currentChat}/>
            </Paper>
        </Grid>
    )
}