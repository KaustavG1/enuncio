import React from 'react';
import ChatThreadList from '../ChatThreads/ChatThreadList';
import GenericChatBox from '../ChatBox/GenericChatBox';
import './Container.css';

function Container() {
  return (
    <div className="container">
      <ChatThreadList />
      <GenericChatBox />
    </div>
  );
}

export default Container;
