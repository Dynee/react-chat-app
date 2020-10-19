import React, { useEffect, useState } from 'react';

// api
import { api } from './api/api';

// features
import { ChatWindow } from './features/chatwindow/ChatWindow';
import { ChatSidebar } from './features/chatsidebar/ChatSidebar';
import { ChatHeader } from './features/chatheader/ChatHeader';
import { ChatModal } from './features/chatmodal/ChatModal';

// router
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// material-ui
import Grid from '@material-ui/core/Grid';

// nanoid
import { nanoid } from 'nanoid';

// faker
import * as faker from 'faker';

export default function App() {
  const [chats, setChats] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setChats(api.fetchChats());
  }, []);

  const addNewChatHandler = (users, message) => {
    const copiedChats = [...chats];
    const newChat = {
      id: nanoid(),
      messages: [
          { id: nanoid(), text: message, sentAt: faker.time.recent(), sentBy: api.currentUser },
      ],
      recipients: users,
      avatar: faker.image.avatar(),
      alt: "G"
    } 
    copiedChats.push(newChat);
    setChats(copiedChats);
    setOpen(false);
  }

  const handleModal = () => {
    setOpen(true);
  }

  return (
    <Router>
      <ChatWindow>
        <Grid xs={4} spacing={2}>
          <ChatSidebar chats={chats} handleModal={handleModal}/>
        </Grid>
        <Grid xs={8} spacing={2}>
          <Route path="/c/:cid" render={(props) => <ChatHeader {...props} chats={chats}/>}/>
        </Grid>
        <ChatModal open={open} users={api.users} handleClose={addNewChatHandler}/>
      </ChatWindow>
    </Router>
  )
}