import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

export const ChatModal = ({ users, open, handleClose }) => {
    const [checked, setChecked] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [message, setMessage] = useState('');

    const onChangeHandler = event => {
        const { value } = event.target;
        setMessage(value);
    }

    const onCloseHandler = (selectedUsers, message) => {
        if (selectedUsers && message) {
            handleClose(selectedUsers, message);
            setMessage('');
            setSelectedUsers([]);
        }
    }

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const copiedChecked = [...checked];
        const copiedUsers = [...selectedUsers];
        if (currentIndex === -1) {
            copiedChecked.push(value);
            copiedUsers.push(users[value]);
        } else {
            copiedChecked.splice(currentIndex, 1);
            copiedUsers.splice(currentIndex, 1);
        }
        setChecked(copiedChecked);
        setSelectedUsers(copiedUsers);
    }
    
    return (
        <Dialog open={open} aria-labelledby="simple-dialog-title">
            <DialogTitle id="simple-dialog-title">Select A User to Start a Conversation With</DialogTitle>
            <List dense>
                {users.map((user, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={user}/>
                        </ListItemAvatar>
                        <ListItemText primary={user}/>
                        <ListItemSecondaryAction>
                            <Checkbox 
                                edge="end"
                                onChange={handleToggle(index)}
                                checked={checked.indexOf(index) !== -1}
                                inputProps={{'aria-labelledby': `checkbox-list-secondary-label-${index + 1}`}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                <ListItem>
                    <input onChange={onChangeHandler} type="text" value={message} label="Enter a message" />
                </ListItem>
                <ListItem>
                    <button onClick={() => onCloseHandler(selectedUsers, message)} type="button">Start Chat</button>
                </ListItem>
            </List>
        </Dialog>
    )
}