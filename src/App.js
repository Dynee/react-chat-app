import React, { useState } from 'react';

// nano id for generating ids
import { nanoid } from 'nanoid';

// features
import { AddNewConversationModal } from './features/conversation/modal';
import { ConversationContainer } from './features/conversation/container';

// faker for fake data
import * as faker from 'faker';

// api to pull in data
import { api } from './api/api';

// styling
import './App.css';



function App() {
  const [conversations, setConversations] = useState(
    JSON.parse(localStorage.getItem("conversations")) || api.fetchConversations()
  );
  const [isModalVisible, setIsModalVisible] = useState(false)
  const users = api.fetchUsers();

  const addNewConvo = (users, message) => {
    if (users[0] && message) {
      const date = new Date();
      const id = nanoid();
      const newConversations = conversations.concat({
        id: id,
        messages: [
          {message: message, name: api.getFirstLastInitial(api.username), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}`}
        ],
        recipients: [
          ...users,
          {
            id: api.userId,
            name: 'Lucas Padden',
            avatar: api.userAvatar
          },
        ]
      })

      // make sure to copy data to local storage
      setConversations(newConversations);
      localStorage.setItem("conversations", JSON.stringify(newConversations));
      setIsModalVisible(false);
      automatedResponse(newConversations, id);
    }
  }

  const onMessageSent = (cid, message) => {
    const date = new Date();
    const conversationsCopy = [...conversations];
    const results = conversationsCopy.find(c => c.id === cid);
    results.messages.push({ message: message, name: api.getFirstLastInitial('Lucas Padden'), timestamp: `Today at ${date.getHours()}:${date.getMinutes()}`});
    setConversations(conversationsCopy);
    localStorage.setItem("conversations", JSON.stringify(conversationsCopy));
    automatedResponse(conversationsCopy, cid);
  }

  const automatedResponse = (newConversations, id) => {
    // Simulate a message response from the user after 1-60s.
    setTimeout(() => {
      const date = new Date();
      let message = "Greetings, fellow human being."
      let copyNewConversations = [...newConversations];
      const currentConvo = copyNewConversations.find(c => c.id === id);
      currentConvo.messages.push({
        message: message, 
        name: api.getFirstLastInitial(currentConvo.recipients[0].name), 
        timestamp: `Today at ${date.getHours()}:${date.getMinutes()}`
      });
      setConversations(copyNewConversations);
      localStorage.setItem("conversations", JSON.stringify(copyNewConversations));
    }, faker.random.number({
      'min': 1000,
      'max': 60000
    }))
  }


  return (
    <React.Fragment>
      <ConversationContainer
        onAddNewConvo={() => setIsModalVisible(true)} 
        onMessageSent={onMessageSent}
        conversations={conversations} 
        user={api.getFirstLastInitial(api.username)}
      />
      <AddNewConversationModal 
        open={isModalVisible}
        handleClose={addNewConvo}
        users={users}
      />
    </React.Fragment>
  )
}

export default App;
