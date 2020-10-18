import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { PrimaryButton } from '../button/PrimaryButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxListSecondary({ handleMessage, handleClose, users }) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
      const { value } = event.target;
      console.log(value);
      setMessage(value);
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    const newUsers = [...selectedUsers];

    if (currentIndex === -1) {
      newChecked.push(value);
      newUsers.push(users[value]);
    } else {
      newChecked.splice(currentIndex, 1);
      newUsers.splice(currentIndex, 1);
    }

    setSelectedUsers(newUsers);
    setChecked(newChecked);
  };

  return (
    <List dense className={classes.root}>
      {users.map((user, index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <ListItem key={index} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${index + 1}`}
                src={user.avatar}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={user.name} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(index)}
                checked={checked.indexOf(index) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <ListItem>
        <TextField onChange={handleChange} value={message} size="small" fullWidth id="outlined-basic" label="Enter a message" variant="outlined" />
      </ListItem>
      <ListItem>
        <PrimaryButton onClick={() => handleClose(selectedUsers, message)}>
            Add to Conversation
        </PrimaryButton>
      </ListItem>
    </List>
  );
}
