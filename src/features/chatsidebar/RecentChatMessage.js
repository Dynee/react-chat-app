import React from 'react';

export const RecentChatMessage = ({ messages }) => {
    const message = messages[messages.length - 1];
    return (
        <React.Fragment>{message.text.substring(0, 20)}</React.Fragment>
    )
}