import React from 'react';

export const RecentChatMessage = ({ messages }) => {
    const message = messages[messages.length - 1];
    return (
        <p>{message.text.substring(0, 20)}</p>
    )
}