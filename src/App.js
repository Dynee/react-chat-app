import React, { useEffect, useState } from 'react';

// api
import { api } from './api/api';

// features
import { ChatWindow } from './features/chatwindow/ChatWindow';
import { ChatSidebar } from './features/chatsidebar/ChatSidebar';

export default function App() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(api.fetchChats());
  }, []);

  return (
    <ChatWindow>
      <ChatSidebar chats={chats} />
    </ChatWindow>
  )
}