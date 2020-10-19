import React from 'react';
import { ChatMessage } from './ChatMessage';

export const ChatBody = ({ chat }) => {
    return (
        <div>
            {chat.messages.map((message, index) => (
                <ChatMessage 
                    key={index}
                    message={message}
                />
            ))}
            <input type="text" name="message" />
            <button type="button">Send</button>
        </div>
    )
}