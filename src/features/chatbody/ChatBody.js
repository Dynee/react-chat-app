import React, { useState } from 'react';
import { ChatMessage } from './ChatMessage';

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
        <div>
            {chat.messages.map((message, index) => (
                <ChatMessage 
                    key={index}
                    message={message}
                />
            ))}
            <input onChange={handleChange} type="text" name="message" value={message}/>
            <button onClick={() => handleClickChange(chat, message)} type="button">Send</button>
        </div>
    )
}