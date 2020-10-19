import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export const ChatMessage = ({ message }) => {
    const [first, last] = message.sentBy.split(' ');
    const displayName = `${first + last.substring(0, 1)}`
    const d = new Date(message.sentAt);
    return (
        <div>
            <Avatar src={displayName} alt={displayName}/>
            <p>{message.text}</p>
            <p>{`Today at ${d.getHours()}:${d.getMinutes()}`}</p>
        </div>
    )
}