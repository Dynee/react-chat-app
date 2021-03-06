import React, { useEffect, useState } from 'react';

// styles
import { useStyles } from './styles/Styles';

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
  const classes = useStyles();
  const initialChats = () => JSON.parse(localStorage.getItem("conversations")) || api.fetchChats();
  const [chats, setChats] = useState(initialChats);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(chats));
  }, [chats]);

  const addNewChatHandler = (users, message) => {
    const copiedChats = [...chats];
    const newChat = {
      id: nanoid(),
      messages: [
          { id: nanoid(), text: message, sentAt: faker.time.recent(), sentBy: api.currentUser },
      ],
      recipients: [api.currentUser, ...users],
      avatar: faker.image.avatar(),
      alt: "G"
    } 
    copiedChats.push(newChat);
    setChats(copiedChats);
    setOpen(false);
    sendAutomatedMessage(newChat, message);
  }

  const handleModal = () => {
    setOpen(true);
  }

  const sendChatMessage = (chat, message) => {
    const copiedChats = [...chats];
    const currentChat = copiedChats.find(c => c.id === chat.id);
    const newMessage = { id: nanoid(), text: message, sentAt: faker.time.recent(), sentBy: api.currentUser };
    currentChat.messages.push(newMessage);
    setChats(copiedChats);
    sendAutomatedMessage(chat);
  }

  const sendAutomatedMessage = (chat) => {
    setTimeout(() => {
      // at this point, the state is not actually updated but localstorage is so we get
      // the data from localstorage instead
      const copiedChats = [...JSON.parse(localStorage.getItem("conversations"))];
      const currentChat = copiedChats.find(c => c.id === chat.id);
      // make the 2nd person recieving the message respond (i.e not the current)
      const newMessage = { id: nanoid(), text: "Greetings, fellow human being.", sentAt: faker.time.recent(), sentBy: currentChat.recipients[1] };
      currentChat.messages.push(newMessage);
      setChats(copiedChats);
      // happen a random time between 1-60s
    }, faker.random.number({ min: 1000, max: 60000 }))
  }

  return (
    <Router>
      <ChatWindow classes={classes}>
        <Grid item xs={2}>
          <ChatSidebar chats={chats} handleModal={handleModal}/>
        </Grid>
        <Grid item xs={10}>
          <Route path="/c/:cid" render={(props) => <ChatHeader {...props} chats={chats} handleChatMessage={sendChatMessage}/>}/>
        </Grid>
        <ChatModal open={open} users={api.users} handleClose={addNewChatHandler}/>
      </ChatWindow>
    </Router>
  )
}