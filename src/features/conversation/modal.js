import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckboxListSecondary from './checkbox';

export const AddNewConversationModal = ({ handleClose, open, users }) => (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Select User to Message</DialogTitle>
        <CheckboxListSecondary users={users} handleClose={handleClose}/>
    </Dialog>
)