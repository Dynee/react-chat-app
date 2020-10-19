import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

export const ChatBody = ({ chat, handleChatMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        const { value } = event.target;
        setMessage(value);
    }

    const handleClickChange = (chat, message) => {
        handleChatMessage(chat, message);
        setMessage('');
    }

    return (
        <Grid>
            <List style={{"height": "500px", overflow: "auto"}}>
                {chat.messages.map((message, index) => (
                    <ChatMessage 
                        key={index}
                        message={message}
                    />
                ))}
            </List>
            <Grid container direction="row">
                <Grid item xs={10}>
                    <TextField id="outline-basic" size="small" fullWidth variant="outlined" value={message}/>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth onClick={() => handleClickChange(chat, message)} variant="contained" color="primary">Send</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}