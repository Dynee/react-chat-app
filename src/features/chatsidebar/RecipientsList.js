import React from 'react';
import { api } from '../../api/api';


// TODO: use context to grab the current user
export const RecipientsList = ({ recipients }) => (
    <ul>
        {recipients.map((recipient, index) => {
            if (!(recipient === api.currentUser)) {
                return <span key={index}>{recipient}</span>
            }
        })}
    </ul>
)