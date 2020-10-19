import React from 'react';
import { api } from '../../api/api';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// TODO: use context to grab the current user
export const RecipientsList = ({ recipients }) => (
    <List>
        {recipients.map((recipient, index) => {
            if (!(recipient === api.currentUser)) {
                return (
                    <ListItem key={index}>
                        <ListItemText 
                            primary={recipient}
                        />
                    </ListItem>
                )
            }
        })}
    </List>
)