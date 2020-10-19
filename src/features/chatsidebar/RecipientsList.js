import React from 'react';
import { api } from '../../api/api';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export const RecipientsList = ({ recipients, showAvatar }) => (
    <List style={{display: "flex", flexDirection: "row", padding: "0px"}}>
        {recipients.map((recipient, index) => {
            if (!(recipient === api.currentUser)) {
                return (
                    <ListItem key={index}>
                        {showAvatar ? (
                            <ListItemAvatar>
                                <Avatar alt={recipient} />
                            </ListItemAvatar>
                        ): null}
                        <ListItemText 
                            primary={recipient}
                        />
                    </ListItem>
                )
            }
        })}
    </List>
)